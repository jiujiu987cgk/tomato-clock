// Generate PNG icons from SVG for PWABuilder compatibility
const fs = require('fs');
const path = require('path');

// Read the SVG files
const svg192 = fs.readFileSync(path.join(__dirname, 'assets', 'icons', 'icon-192.svg'), 'utf8');
const svg512 = fs.readFileSync(path.join(__dirname, 'assets', 'icons', 'icon-512.svg'), 'utf8');

// Create a simple HTML page that shows the SVG as an image
// This will be used as a data URL for the icons
const svg192Base64 = Buffer.from(svg192).toString('base64');
const svg512Base64 = Buffer.from(svg512).toString('base64');

const dataUrl192 = `data:image/svg+xml;base64,${svg192Base64}`;
const dataUrl512 = `data:image/svg+xml;base64,${svg512Base64}`;

// Write the icon data URLs to a JSON file that the manifest can reference
const iconData = {
    icon192: dataUrl192,
    icon512: dataUrl512
};

fs.writeFileSync(path.join(__dirname, 'icon-data.json'), JSON.stringify(iconData, null, 2));
console.log('Icon data URLs generated successfully!');
console.log('192 icon data URL length:', dataUrl192.length);
console.log('512 icon data URL length:', dataUrl512.length);

// Also create a simple HTML page that embeds the icons
// This can be used as a fallback
const iconPage = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Icon Fallback</title></head>
<body>
    <h1>Icon Fallback Page</h1>
    <img src="${dataUrl192}" width="192" height="192" alt="192x192">
    <img src="${dataUrl512}" width="512" height="512" alt="512x512">
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'icon-fallback.html'), iconPage);
console.log('Icon fallback page generated!');