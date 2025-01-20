const fs = require('fs');

const { stdin, stdout } = process;

stdin.setEncoding('utf-8');

let str = '';

const path = require('path');

const directoryPath = path.join(__dirname, 'text.txt');

console.log(`
===========================================
 Write couple words to test writeStream !
===========================================
`);

const exitProgram = () => {
  console.log('\n=====================================');
  console.log('You have finished, this is your file!');
  console.log('=====================================');
  console.log(str);
  process.exit(0); // Завершение программы
};

stdin.on('data', (data) => {
  const input = data.trim();
  if (input.toLowerCase() === 'exit') {
    exitProgram();
  }
  output.write(data);
  str += data;
});

const output = fs.createWriteStream(directoryPath, {
  encoding: 'utf-8',
});
process.on('SIGINT', () => {
  exitProgram();
});
