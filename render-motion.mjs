import { mkdir, rm, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const require = createRequire(import.meta.url)
const ffmpegPath = require('ffmpeg-static')
const chromePath = process.env.CHROME_PATH ?? '/usr/bin/google-chrome'
const fps = Number(process.env.FPS ?? 30)
const duration = Number(process.env.DURATION ?? 12)
const quality = process.env.QUALITY ?? 'production'
const formats = process.env.FORMATS?.split(',').map((value) => value.trim()).filter(Boolean) ?? ['landscape', 'social']
const dimensions = quality === 'preview'
  ? { landscape: [960, 540], social: [540, 960] }
  : { landscape: [1920, 1080], social: [1080, 1920] }
const port = Number(process.env.CHROME_DEBUG_PORT ?? 9444)
const userDataDir = process.env.CHROME_USER_DATA_DIR ?? '/tmp/lames-motion-chrome'
const framesRoot = resolve('.motion-frames')
const outputDir = resolve('public/video')
const compositionUrl = pathToFileURL(resolve('public/motion/lames-motion.html')).toString()

const delay = (ms) => new Promise((resolveDelay) => setTimeout(resolveDelay, ms))

async function getJson(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error(`Request failed ${response.status}: ${url}`)
  return response.json()
}

async function waitForChrome() {
  for (let index = 0; index < 80; index += 1) {
    try { return await getJson(`http://127.0.0.1:${port}/json/version`) } catch { await delay(250) }
  }
  throw new Error('Chrome did not start')
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl)
  let id = 0
  const callbacks = new Map()
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (!message.id || !callbacks.has(message.id)) return
    const callback = callbacks.get(message.id)
    callbacks.delete(message.id)
    if (message.error) callback.reject(new Error(message.error.message))
    else callback.resolve(message.result)
  })
  const ready = new Promise((resolveReady, reject) => {
    ws.addEventListener('open', resolveReady, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })
  return {
    ws,
    ready,
    send(method, params = {}) {
      id += 1
      ws.send(JSON.stringify({ id, method, params }))
      return new Promise((resolveSend, reject) => callbacks.set(id, { resolve: resolveSend, reject }))
    },
    close() { ws.close() },
  }
}

function run(command, args) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' })
    child.on('error', reject)
    child.on('exit', (code) => code === 0 ? resolveRun() : reject(new Error(`${command} exited with code ${code}`)))
  })
}

async function captureFormat(format, width, height) {
  const deviceScaleFactor = quality === 'preview' ? 1 : 2
  const viewportWidth = width / deviceScaleFactor
  const viewportHeight = height / deviceScaleFactor
  const frameDir = resolve(framesRoot, format)
  await rm(frameDir, { recursive: true, force: true })
  await mkdir(frameDir, { recursive: true })
  const target = await getJson(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(compositionUrl)}`, { method: 'PUT' })
  const client = connect(target.webSocketDebuggerUrl)
  await client.ready
  await client.send('Page.enable')
  await client.send('Runtime.enable')
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: viewportWidth,
    height: viewportHeight,
    deviceScaleFactor,
    mobile: false,
  })
  await client.send('Page.navigate', { url: compositionUrl })
  await delay(600)
  await client.send('Runtime.evaluate', { expression: 'window.motionReady', awaitPromise: true, returnByValue: true })

  const totalFrames = Math.round(duration * fps)
  console.log(`Rendering ${format}: ${width}x${height} at ${deviceScaleFactor}x density, ${totalFrames} frames`)
  for (let frame = 0; frame < totalFrames; frame += 1) {
    const time = frame / fps
    await client.send('Runtime.evaluate', { expression: `window.renderFrame(${time})`, returnByValue: true })
    const screenshot = await client.send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true,
      clip: { x: 0, y: 0, width: viewportWidth, height: viewportHeight, scale: 1 },
    })
    await writeFile(resolve(frameDir, `frame-${String(frame).padStart(4, '0')}.png`), Buffer.from(screenshot.data, 'base64'))
    if (frame % fps === 0) console.log(`  ${Math.round(time)}s / ${duration}s`)
  }
  client.close()

  const outputPath = resolve(outputDir, format === 'social' ? 'lames-services-social.mp4' : 'lames-services-website.mp4')
  await run(ffmpegPath, [
    '-y', '-framerate', String(fps), '-i', resolve(frameDir, 'frame-%04d.png'),
    '-c:v', 'libx264', '-preset', 'medium', '-crf', quality === 'preview' ? '23' : '18',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', String(fps), outputPath,
  ])
  console.log(`Saved ${outputPath}`)
}

await mkdir(outputDir, { recursive: true })
await rm(userDataDir, { recursive: true, force: true })
const chrome = spawn(chromePath, [
  '--headless=new', '--disable-gpu', '--disable-dev-shm-usage', '--no-first-run',
  '--no-default-browser-check', '--hide-scrollbars', '--allow-file-access-from-files',
  `--remote-debugging-port=${port}`, `--user-data-dir=${userDataDir}`, 'about:blank',
], { stdio: 'ignore' })

try {
  await waitForChrome()
  for (const format of formats) {
    const size = dimensions[format]
    if (!size) throw new Error(`Unknown format: ${format}`)
    await captureFormat(format, ...size)
  }
} finally {
  chrome.kill('SIGTERM')
  await delay(500)
  await rm(userDataDir, { recursive: true, force: true }).catch(() => {})
  if (process.env.KEEP_FRAMES !== '1') await rm(framesRoot, { recursive: true, force: true }).catch(() => {})
}
