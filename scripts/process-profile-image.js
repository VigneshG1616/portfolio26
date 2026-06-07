#!/usr/bin/env node
/**
 * Simple image processing script using sharp.
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/process-profile-image.js "C:\\Users\\vgthe\\Downloads\\20260517_212710(1).jpg"
 *
 * Output files (written to src/assets):
 * - portfolio_image_vignesh_g.jpg        (cropped 4:5 center, 1080w)
 * - portfolio_image_vignesh_g_768.jpg
 * - portfolio_image_vignesh_g_540.jpg
 * - portfolio_image_vignesh_g_360.jpg
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const argv = process.argv.slice(2);
if (!argv[0]) {
  console.error('Please provide a source image path.');
  process.exit(1);
}

const src = argv[0];
const outDir = path.resolve(process.cwd(), 'src', 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const baseName = 'portfolio_image_vignesh_g';

async function process() {
  try {
    // Ensure input exists
    if (!fs.existsSync(src)) {
      console.error('Source file not found:', src);
      process.exit(1);
    }

    // target sizes (width) for a 4:5 crop
    const sizes = [1080, 768, 540, 360];

    // Read metadata to determine shorter dimension for safe center crop
    const meta = await sharp(src).metadata();
    const minDim = Math.min(meta.width || 0, meta.height || 0);

    // For each size, crop to 4:5 ratio centered then resize
    for (const w of sizes) {
      const h = Math.round(w * 5 / 4);
      const out = path.join(outDir, `${baseName}${w === 1080 ? '' : `_${w}`}.jpg`);

      await sharp(src)
        .resize({
          width: Math.max(w, Math.min(minDim, w)),
          height: Math.round(Math.max(w, Math.min(minDim, w)) * 5 / 4),
          fit: 'cover',
          position: 'centre'
        })
        .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
        .toFile(out);

      console.log('Written', out);
    }

    // Also copy a fallback exact-named file used by code
    const mainOut = path.join(outDir, `${baseName}.jpg`);
    if (fs.existsSync(path.join(outDir, `${baseName}_1080.jpg`))) {
      fs.copyFileSync(path.join(outDir, `${baseName}_1080.jpg`), mainOut);
      console.log('Copied main file', mainOut);
    }

    console.log('Done. Import these from src/assets in your code.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

process();
