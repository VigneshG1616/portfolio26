#!/usr/bin/env node
// Extracts selected favicon files from a zip into public/assets
// Usage: npm install adm-zip --save-dev
//        node scripts/install-favicon.js "C:\\Users\\vgthe\\Downloads\\favicon.zip"

import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const AdmZip = require('adm-zip');

const argv = process.argv.slice(2);
if (!argv[0]) {
  console.error('Usage: node scripts/install-favicon.js <path-to-zip>');
  process.exit(1);
}

const zipPath = path.resolve(argv[0]);
if (!fs.existsSync(zipPath)) {
  console.error('Zip file not found:', zipPath);
  process.exit(1);
}

const outDir = path.resolve(process.cwd(), 'public', 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const zip = new AdmZip(zipPath);
const entries = zip.getEntries();

const keepExt = ['.png', '.ico', '.svg', '.webmanifest', '.json', '.xml'];
let written = [];

for (const entry of entries) {
  if (entry.isDirectory) continue;
  const base = path.basename(entry.entryName);
  const ext = path.extname(base).toLowerCase();
  if (!keepExt.includes(ext)) continue;
  const outPath = path.join(outDir, base);
  fs.writeFileSync(outPath, entry.getData());
  written.push(base);
}

if (written.length === 0) {
  console.log('No favicon files found in the zip. Extracted nothing.');
} else {
  console.log('Extracted files to public/assets:', written.join(', '));
}

console.log('Done. Update index.html if needed (links were added by the project).');
