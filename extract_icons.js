const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function extractIcons() {
  const imgPath = 'logos.png';
  const outDir = 'public/images/icons';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const { data, info } = await sharp(imgPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  
  const visited = new Uint8Array(width * height);
  const objects = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x);
      if (visited[idx]) continue;
      
      const alpha = data[idx * channels + 3];
      const isVisible = (alpha > 10);
      
      if (!isVisible) {
        visited[idx] = 1;
        continue;
      }

      const queue = [{x, y}];
      let minX = x, maxX = x, minY = y, maxY = y;
      let count = 0;

      visited[idx] = 1;

      let qIdx = 0;
      while (qIdx < queue.length) {
        const curr = queue[qIdx++];
        minX = Math.min(minX, curr.x);
        maxX = Math.max(maxX, curr.x);
        minY = Math.min(minY, curr.y);
        maxY = Math.max(maxY, curr.y);
        count++;

        const neighbors = [
          {x: curr.x-1, y: curr.y}, {x: curr.x+1, y: curr.y},
          {x: curr.x, y: curr.y-1}, {x: curr.x, y: curr.y+1}
        ];

        for (const n of neighbors) {
          if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
            const nIdx = n.y * width + n.x;
            if (!visited[nIdx]) {
              const nAlpha = data[nIdx * channels + 3];
              if (nAlpha > 10) {
                visited[nIdx] = 1;
                queue.push(n);
              } else {
                visited[nIdx] = 1;
              }
            }
          }
        }
      }

      if (count > 500) { 
        objects.push({ minX, maxX, minY, maxY, area: count });
      }
    }
  }

  console.log(`Initial objects found: ${objects.length}`);

  let merged = true;
  while (merged) {
    merged = false;
    for (let i = 0; i < objects.length; i++) {
      for (let j = i + 1; j < objects.length; j++) {
        const o1 = objects[i];
        const o2 = objects[j];
        
        const dx = Math.max(0, Math.max(o1.minX - o2.maxX, o2.minX - o1.maxX));
        const dy = Math.max(0, Math.max(o1.minY - o2.maxY, o2.minY - o1.maxY));
        
        // Smaller merge distance to avoid merging separate icons
        if (dx < 30 && dy < 30) { 
          o1.minX = Math.min(o1.minX, o2.minX);
          o1.maxX = Math.max(o1.maxX, o2.maxX);
          o1.minY = Math.min(o1.minY, o2.minY);
          o1.maxY = Math.max(o1.maxY, o2.maxY);
          o1.area += o2.area;
          objects.splice(j, 1);
          merged = true;
          break;
        }
      }
      if (merged) break;
    }
  }

  console.log(`Merged objects: ${objects.length}`);

  // Sort objects: top row first, then left to right
  objects.sort((a, b) => {
    if (Math.abs(a.minY - b.minY) > 150) return a.minY - b.minY;
    return a.minX - b.minX;
  });

  for (let i = 0; i < objects.length; i++) {
    const obj = objects[i];
    const pad = 30;
    const left = Math.max(0, obj.minX - pad);
    const top = Math.max(0, obj.minY - pad);
    const w = Math.min(width - left, obj.maxX - obj.minX + 2 * pad);
    const h = Math.min(height - top, obj.maxY - obj.minY + 2 * pad);
    
    await sharp(imgPath)
      .extract({ left, top, width: w, height: h })
      .toFile(path.join(outDir, `icon_${i+1}.png`));
      
    console.log(`Saved icon_${i+1}.png: ${w}x${h} area: ${obj.area}`);
  }
}

extractIcons().catch(console.error);