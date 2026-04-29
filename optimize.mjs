import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src/assets/img');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

async function optimizeImages() {
  console.log('Starting image optimization...');
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Only optimize if larger than 300KB
    if (stat.size > 300 * 1024) {
      const tempPath = path.join(dir, 'temp_' + file);
      
      try {
        await sharp(filePath)
          .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 75, effort: 6 })
          .toFile(tempPath);
          
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStat = fs.statSync(filePath);
        console.log(`Optimized: ${file} (${(stat.size / 1024).toFixed(0)}KB -> ${(newStat.size / 1024).toFixed(0)}KB)`);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
      }
    } else {
      console.log(`Skipped: ${file} (Already small: ${(stat.size / 1024).toFixed(0)}KB)`);
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages();
