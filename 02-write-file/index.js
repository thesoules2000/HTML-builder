const fs = require('fs');

const { stdin, stdout } = process;

let str = '';

const path = require('path');

const directoryPath = path.join(__dirname, 'text.txt');

console.log(`
===========================================
 Write couple words to test writeStream !
===========================================
`);

stdin.on('data', (stream) => {
  output.write(stream);
  str += stream;
});

const output = fs.createWriteStream(directoryPath, {
  encoding: 'utf-8',
});
process.on('SIGINT', () => {
  stdout.write(
    '\n===========================================\nYou have finished, this is your result:\n===========================================\n',
  );
  stdout.write(str);
  process.exit();
});
