/**
 * Generates og-image.png from dagger-and-die-preview.html.
 * Run: npm install puppeteer && node generate-og-image.js
 * Place og-image.png in your site root so https://daggeranddie.us/og-image.png works.
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const previewPath = path.join(__dirname, 'dagger-and-die-preview.html');
const outputPath = path.join(__dirname, 'og-image.png');

if (!fs.existsSync(previewPath)) {
  console.error('Not found: dagger-and-die-preview.html');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  const fileUrl = 'file:///' + path.resolve(previewPath).replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  const frame = await page.$('.preview-frame');
  if (frame) {
    await frame.screenshot({ path: outputPath });
    console.log('Saved:', outputPath);
  } else {
    await page.screenshot({ path: outputPath, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    console.log('Saved (full viewport):', outputPath);
  }
  await browser.close();
})();
