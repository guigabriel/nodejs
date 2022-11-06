// const convert = require('./brlValue');

// importando por desestruturação;

const { brl, valueConvert } = require('./brlValue');

console.log(`Valor do Dollar ${brl}`);
console.log(`Valor Convertido ${valueConvert(10)}`);

// const path = require('path');
// console.log(path.dirname('/dev/Back-end'));
// console.log(path.resolve('*', '*', 'malware' ));

// Módulos internos 

// const fs = require('fs');

// fs.readFileSync('./meuArquivo.txt');

// Módulos da comunidade
// Para usa esses módulos é necessário fazer a instalação pelo CLI e buscar o módulo no site do npm.

const readLine = require('readline-sync');
const name = readLine.question('Digite seu nome: ');
const idade = readLine.questionInt('Digite sua idade: ');
console.log(`Olá ${name}, você tem ${idade} anos`);
