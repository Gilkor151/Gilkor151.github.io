import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const separatedCssDir = join('U1', 'css', 'separated');
const outputCssFile = join('U1', 'style.css');

if (!existsSync(separatedCssDir)) {
    console.error(`Directory ${separatedCssDir} does not exist.`);
    process.exit(1);
}

const cssFiles = readdirSync(separatedCssDir)
    .filter(file => file.endsWith('.css'))
    .sort();

if (cssFiles.length === 0) {
    console.error(`No CSS files found in ${separatedCssDir}.`);
    process.exit(1);
}

let mergedCss = '';

cssFiles.forEach(file => {
    const filePath = join(separatedCssDir, file);
    const fileContent = readFileSync(filePath, 'utf8');
    mergedCss += `\n/* Start of ${file} */\n` + fileContent + `\n/* End of ${file} */\n`;
});

writeFileSync(outputCssFile, mergedCss);
console.log(`Merged ${cssFiles.length} CSS files into ${outputCssFile}`);
