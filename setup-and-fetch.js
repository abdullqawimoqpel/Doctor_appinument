const fs = require('fs');
const https = require('https');
const path = require('path');

const projectJsonPath = 'C:/Users/computer/.gemini/antigravity/brain/6c172424-a1dc-4edf-8210-2ab42800a2b7/.system_generated/steps/16/output.txt';
const screensJsonPath = 'C:/Users/computer/.gemini/antigravity/brain/6c172424-a1dc-4edf-8210-2ab42800a2b7/.system_generated/steps/20/output.txt';

const projectData = JSON.parse(fs.readFileSync(projectJsonPath, 'utf8'));
const screensData = JSON.parse(fs.readFileSync(screensJsonPath, 'utf8'));

// 1. Configure globals.css
const theme = projectData.designTheme.namedColors;
const typography = projectData.designTheme.typography;

let globalsCss = `@import "tailwindcss";\n\n@theme {\n`;
for (const [key, value] of Object.entries(theme)) {
  globalsCss += `  --color-${key.replace(/_/g, '-')}: ${value};\n`;
}
globalsCss += `  --font-heading: "${projectData.designTheme.headlineFontFamily}", sans-serif;\n`;
globalsCss += `  --font-body: "${projectData.designTheme.bodyFontFamily}", sans-serif;\n`;

const spacing = projectData.designTheme.spacing;
for (const [key, value] of Object.entries(spacing)) {
  let val = String(value);
  if (!val.endsWith('px') && !val.endsWith('rem')) val += 'px'; // fallback
  globalsCss += `  --spacing-${key}: ${val};\n`;
}

globalsCss += `}\n\n`;
globalsCss += `:root {\n`;
for (const [key, value] of Object.entries(theme)) {
  globalsCss += `  --${key.replace(/_/g, '-')}: ${value};\n`;
}
globalsCss += `}\n\n`;

globalsCss += `body {
  background-color: var(--background);
  color: var(--on-background);
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
`;

fs.writeFileSync('src/app/globals.css', globalsCss);
console.log('globals.css updated with design tokens');

// 2. Download all HTML screens
const screensDir = path.join(__dirname, 'src', 'screens_html');
if (!fs.existsSync(screensDir)) {
  fs.mkdirSync(screensDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => { data += chunk; });
      response.on('end', () => {
        fs.writeFileSync(dest, data);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function fetchAll() {
  for (const screen of screensData.screens) {
    const titleObj = screen.title.replace(/[^a-zA-Z0-9]/g, '_');
    const dest = path.join(screensDir, titleObj + '.html');
    console.log('Downloading ' + screen.title + ' to ' + dest + '...');
    await download(screen.htmlCode.downloadUrl, dest);
  }
  console.log('All screens downloaded');
}

fetchAll();
