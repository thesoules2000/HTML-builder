const fs = require('fs');

const { stdin, stdout } = process;

let str = '';

console.log(`
===========================================
 Write couple words to test writeStream !
===========================================
`);

stdin.on('data', (stream) => {
  output.write(stream);
  str += stream;
});

const output = fs.createWriteStream('./02-write-file/text.txt', {
  encoding: 'utf-8',
});
process.on('SIGINT', () => {
  stdout.write(
    '\n===========================================\nYou have finished, this is your result:\n===========================================\n',
  );
  stdout.write(str);
  process.exit();
});
