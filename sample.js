const sharp = require('sharp');
async function sample() {
  const { data, info } = await sharp('logos.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let alphaCount = 0;
  for(let i=0; i < data.length; i += 4) {
    if (data[i+3] > 0) alphaCount++;
  }
  console.log(`Pixels with alpha > 0: ${alphaCount} / ${info.width * info.height}`);
  
  // Let's check a few more pixels
  for(let i=0; i<10; i++) {
     const idx = i * 1536 * 100 + 768; // jump around
     console.log(`Pixel ${idx}: R=${data[idx*4]} G=${data[idx*4+1]} B=${data[idx*4+2]} A=${data[idx*4+3]}`);
  }
}
sample();