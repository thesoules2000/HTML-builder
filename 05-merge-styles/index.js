const { readdir, readFile, writeFile } = require('node:fs/promises');
const { join } = require('node:path');
const path = require('path');

const styles = [];

const filesFolder = join(__dirname, 'styles');
const filesDestination = join(__dirname, 'project-dist', 'bundle.css');

const readStyles = async () => {
  const files = await readdir(filesFolder, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile() && path.extname(file.name).slice(1) === 'css') {
      styles.push(await readFile(path.join(filesFolder, file.name), 'utf-8'));
    }
  }
};

const clearDestinationFile = async () => await writeFile(filesDestination, '');

const writeStyles = async () => {
  await clearDestinationFile();
  await writeFile(filesDestination, styles.join('\n'));
};

const main = async () => {
  await readStyles();
  await writeStyles();
};

main();
