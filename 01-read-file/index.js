const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(directoryPath, {
  encoding: 'utf-8',
});
readableStream.on('data', (chunk) => console.log(chunk));
