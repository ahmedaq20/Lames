import { mkdir, rm, writeFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'

const chromePath = '/usr/bin/google-chrome'
const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000'
const outDir = process.env.SCREENSHOT_DIR ?? 'screenshots'
const port = Number(process.env.CHROME_DEBUG_PORT ?? 9333)
const userDataDir = process.env.CHROME_USER_DATA_DIR ?? '/tmp/lames-chrome-screenshots'
const routes = [
  { name: 'home', path: '/' },
  { name: 'contact', path: '/contact' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
]
const modes = ['light', 'dark']
const routeFilter = process.env.ROUTES?.split(',').map((route) => route.trim()).filter(Boolean)
const modeFilter = process.env.MODES?.split(',').map((mode) => mode.trim()).filter(Boolean)
const selectedRoutes = routeFilter
  ? routes.filter((route) => routeFilter.includes(route.name) || routeFilter.includes(route.path))
  : routes
const selectedModes = modeFilter ? modes.filter((mode) => modeFilter.includes(mode)) : modes
const useExistingChrome = process.env.USE_EXISTING_CHROME === '1'
const closeExistingChrome = process.env.CLOSE_EXISTING_CHROME === '1'

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getJson(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error(`Request failed ${response.status}: ${url}`)
  }
  return response.json()
}

async function waitForChrome() {
  for (let i = 0; i < 80; i += 1) {
    try {
      return await getJson(`http://127.0.0.1:${port}/json/version`)
    } catch {
      await delay(250)
    }
  }
  throw new Error('Chrome did not start')
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl)
  let id = 0
  const callbacks = new Map()

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (message.id && callbacks.has(message.id)) {
      const { resolve, reject } = callbacks.get(message.id)
      callbacks.delete(message.id)
      if (message.error) reject(new Error(message.error.message))
      else resolve(message.result)
    }
  })

  const ready = new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })

  return {
    ws,
    ready,
    send(method, params = {}) {
      id += 1
      ws.send(JSON.stringify({ id, method, params }))
      return new Promise((resolve, reject) => callbacks.set(id, { resolve, reject }))
    },
    close() {
      ws.close()
    },
  }
}

function routeUrl(path) {
  return new URL(path, baseUrl).toString()
}

async function waitForLoad(client) {
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 8000)
    const listener = (event) => {
      const message = JSON.parse(event.data)
      if (message.method === 'Page.loadEventFired') {
        clearTimeout(timeout)
        client.ws.removeEventListener('message', listener)
        resolve()
      }
    }
    client.ws.addEventListener('message', listener)
  })
}

async function revealScrollAnimations(client) {
  const { contentSize } = await client.send('Page.getLayoutMetrics')
  const maxY = Math.ceil(contentSize.height)

  for (let y = 0; y <= maxY; y += 900) {
    await client.send('Runtime.evaluate', {
      expression: `window.scrollTo(0, ${y});`,
    })
    await delay(180)
  }

  await client.send('Runtime.evaluate', {
    expression: 'window.scrollTo(0, 0);',
  })
  await delay(1000)
}

async function captureRoute(route, mode) {
  const target = await getJson(`http://127.0.0.1:${port}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' })
  const client = connect(target.webSocketDebuggerUrl)
  await client.ready

  await client.send('Page.enable')
  await client.send('Runtime.enable')
  await client.send('Page.addScriptToEvaluateOnNewDocument', {
    source: `
      localStorage.setItem('theme', ${JSON.stringify(mode)});
      document.documentElement.classList.toggle('dark', ${JSON.stringify(mode === 'dark')});
    `,
  })
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1200,
    deviceScaleFactor: 1,
    mobile: false,
  })

  await client.send('Page.navigate', { url: routeUrl(route.path) })
  await waitForLoad(client)

  await delay(3500)
  await revealScrollAnimations(client)
  await client.send('Runtime.evaluate', {
    expression: `window.scrollTo(0, 0); document.documentElement.classList.toggle('dark', '${mode}' === 'dark');`,
  })
  await delay(750)

  const { contentSize } = await client.send('Page.getLayoutMetrics')

  const result = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: 0,
      y: 0,
      width: Math.ceil(contentSize.width),
      height: Math.ceil(contentSize.height),
      scale: 1,
    },
  })

  const filePath = `${outDir}/${route.name}-${mode}.png`
  await writeFile(filePath, Buffer.from(result.data, 'base64'))
  client.close()
  return filePath
}

await mkdir(outDir, { recursive: true })
if (!useExistingChrome) {
  await rm(userDataDir, { recursive: true, force: true })
}

const chrome = useExistingChrome
  ? null
  : spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    'about:blank',
  ], { stdio: 'ignore' })

let browserVersion

try {
  browserVersion = await waitForChrome()
  for (const route of selectedRoutes) {
    for (const mode of selectedModes) {
      console.log(`Capturing ${route.path} (${mode})`)
      const screenshot = await captureRoute(route, mode)
      console.log(`Saved ${screenshot}`)
    }
  }
} finally {
  if (useExistingChrome && closeExistingChrome && browserVersion?.webSocketDebuggerUrl) {
    const browser = connect(browserVersion.webSocketDebuggerUrl)
    await browser.ready
    await browser.send('Browser.close').catch(() => {})
    browser.close()
  } else if (chrome) {
    chrome.kill('SIGTERM')
    await delay(1000)
    await rm(userDataDir, { recursive: true, force: true }).catch(() => {})
  }
}
