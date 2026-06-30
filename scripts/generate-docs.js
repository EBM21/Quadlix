const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outputFile = path.join(rootDir, 'project-code.md');

const directoriesToScan = [
  'src',
];

const filesToInclude = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'next.config.js',
];

const excludeDirs = ['node_modules', '.next', '.git', 'ui'];

let mdContent = '# Project Codebase\n\n';

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        scanDirectory(fullPath);
      }
    } else {
      appendFile(fullPath);
    }
  }
}

function appendFile(filePath) {
  const relativePath = path.relative(rootDir, filePath);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const ext = path.extname(filePath).slice(1) || 'txt';
    mdContent += `## ${relativePath}\n\n\`\`\`${ext}\n${content}\n\`\`\`\n\n`;
  } catch (error) {
    console.error(`Error reading ${relativePath}: ${error.message}`);
  }
}

for (const file of filesToInclude) {
  appendFile(path.join(rootDir, file));
}

for (const dir of directoriesToScan) {
  scanDirectory(path.join(rootDir, dir));
}

fs.writeFileSync(outputFile, mdContent);
console.log(`Generated ${outputFile} successfully.`);
