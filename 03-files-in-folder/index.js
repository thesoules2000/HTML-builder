const fs = require('fs').promises;
const path = require('path');

const directoryPath = path.join(__dirname, 'secret-folder');

async function readFiles() {
  try {
    const files = await fs.readdir(directoryPath, { withFileTypes: true });
    const filesData = [];

    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(directoryPath, file.name);
        const type = path.extname(file.name).slice(1);
        const stats = await fs.stat(filePath);

        filesData.push({
          Name: file.name,
          Type: type,
          Size: `${stats.size} bytes`,
        });
      }
    }
    console.table(filesData);
  } catch (err) {
    console.log(err);
  }
}

readFiles();
