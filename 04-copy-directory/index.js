const { mkdir, copyFile, readdir, rm } = require('node:fs/promises');
const { join } = require('node:path');

const filesFolder = join(__dirname, 'files');
const destinationFolder = join(__dirname, 'files-сopy');

const makeDirectory = async () => {
  await rm(destinationFolder, { recursive: true, force: true });
  await mkdir(destinationFolder, { recursive: true });
};

const fileCopy = async () => {
  const files = await readdir(filesFolder, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile()) {
      const sourcePath = join(filesFolder, file.name);
      const destPath = join(destinationFolder, file.name);
      try {
        await copyFile(sourcePath, destPath);
      } catch {
        console.error(`Failed to copy file: ${file.name}`);
      }
    }
  }
};

const main = async () => {
  try {
    await makeDirectory();
    await fileCopy();
  } catch (err) {
    console.error(`Fatal error: ${err.message}`);
  }
};

main();
