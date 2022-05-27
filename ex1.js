let readlineSync = require('readline-sync')

let nome = readlineSync.question('Informe seu nome: ')
let peso = readlineSync.question('Informe seu peso: ')
let altura = readlineSync.question('Informe sua altura: ')
console.log(`Olá ${nome} você está pesando ${peso} e medindo ${altura}`)