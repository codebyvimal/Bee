const sharp = require('sharp');
async function analyze() {
  const { data, info } = await sharp('Logos.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const c = info.channels;
  
  const colSum = new Array(w).fill(0);
  const rowSum = new Array(h).fill(0);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * c;
      const alpha = data[idx + 3];
      if (alpha > 10 && !(data[idx]>240 && data[idx+1]>240 && data[idx+2]>240)) {
        colSum[x]++;
        rowSum[y]++;
      }
    }
  }
  
  // Find gaps in columns
  let gapsX = [];
  let inGap = true;
  for(let x=0; x<w; x++){
    if(colSum[x]===0 && !inGap) { inGap = true; gapsX.push(x); }
    else if(colSum[x]>0 && inGap) { inGap = false; }
  }
  console.log('Horizontal gaps at:', gapsX);
  
  // Find gaps in rows
  let gapsY = [];
  inGap = true;
  for(let y=0; y<h; y++){
    if(rowSum[y]===0 && !inGap) { inGap = true; gapsY.push(y); }
    else if(rowSum[y]>0 && inGap) { inGap = false; }
  }
  console.log('Vertical gaps at:', gapsY);
}
analyze();