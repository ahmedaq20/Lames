import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ffmpegPath = require('ffmpeg-static');

const inputVideo = resolve('public/video/hero2.mp4');
const outputDir = resolve('public/frames');
const totalFrames = 180;

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

console.log(`FFmpeg path: ${ffmpegPath}`);
console.log(`Extracting ${totalFrames} frames from ${inputVideo}...`);

const cmd = `"${ffmpegPath}" -i "${inputVideo}" -vframes ${totalFrames} -q:v 2 "${outputDir}\\frame-%03d.jpg"`;
console.log(`Running: ${cmd}`);

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log(`Done! Extracted ${totalFrames} frames.`);
} catch (err) {
  console.error('Failed:', err.message);
  process.exit(1);
}
