import { spawn, execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;

const outDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { width: 375, height: 812, name: '375px-mobile' },
  { width: 768, height: 1024, name: '768px-tablet' },
  { width: 1280, height: 900, name: '1280px-desktop' },
  { width: 1920, height: 1080, name: '1920px-ultrawide' },
];

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('Starting Vite preview server on port 3000...');
  const server = spawn('npx.cmd', ['vite', 'preview', '--port', '3000'], {
    stdio: 'ignore',
    shell: true,
  });

  await sleep(3500);

  const targetUrl = 'http://localhost:3000';

  for (const vp of viewports) {
    const outFile = path.join(outDir, `${vp.name}.png`);
    const cmd = `"${browserPath}" --headless=new --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${outFile}" "${targetUrl}"`;
    console.log(`Capturing ${vp.name}...`);
    try {
      execSync(cmd, { stdio: 'ignore' });
      console.log(`Saved screenshot: ${outFile}`);
    } catch (err) {
      console.error(`Failed: ${vp.name}`, err.message);
    }
  }

  try {
    server.kill();
  } catch (e) {}

  console.log('Finished capturing screenshots.');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
