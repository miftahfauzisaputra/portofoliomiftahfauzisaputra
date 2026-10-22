import fs from 'fs';

const data = JSON.parse(fs.readFileSync('all-miftah-data.json', 'utf8'));

for (const [page, info] of Object.entries(data)) {
  console.log(`\n================== PAGE: ${page.toUpperCase()} ==================`);
  console.log('OG Title:', info.ogTitle);
  console.log('OG Desc:', info.ogDesc);
  console.log('Images (first 10):', info.images.slice(0, 10));
  console.log('Key texts:');
  info.texts.filter(t => t.length > 3 && !t.includes('{') && !t.includes(';') && !t.includes('var ') && !t.includes('webpack') && !t.includes('.bundle.') && !t.includes('http') && !t.includes('px') && !t.includes('alpha') && !t.includes('width')).forEach(t => console.log('  *', t));
}
