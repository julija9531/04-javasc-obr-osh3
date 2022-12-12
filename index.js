const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('process');


const rl = readline.createInterface({ input, output });
const fs = require("fs");

let num = Math.floor(Math.random() * 1000);

let ansCount = 0;
const line1 = "__________________________________________________\n"
let log1 = `${line1}Загаданное число: ${num}\n`;

rl.on('close', function() {
  log1 = log1 + `Попытка №${ansCount}; Введено число: ${num}; Поздравляю! Вы Угадали!!!\n`;
	console.log(`Поздравляю! Вы Угадали c ${ansCount} попытки!!!`);
  fs.appendFileSync("logs.txt", log1);
});

let answer = 0;

async function numCheck() {
  answer = await rl.question(`Попытка №${ansCount+1} Введите число от 1 до 1000: `); 

  console.log(answer);
  ansCount++;
  if (answer > num) {
    log1 = log1 + `Попытка №${ansCount}; Введено число: ${answer}; Введенное число больше загаданного.\n`;
    console.log(`Ваше число больше загаданного!`);
    numCheck();
  } else if (answer < num) {
    log1 = log1 + `Попытка №${ansCount}; Введено число: ${answer}; Введенное число меньше загаданного.\n`;
    console.log(`Ваше число меньше загаданного!`);
    numCheck();
  } else {
    rl.close();
  }
}


numCheck();

