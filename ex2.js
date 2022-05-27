let readlineSync = require('readline-sync')

let nome = readlineSync.question('Informe seu nome: ')
let peso = readlineSync.question('Informe seu peso: ')
let altura = readlineSync.question('Informe sua altura: ')
let imc = (peso/(altura*altura))
console.log(`Olá ${nome} com ${peso} e medindo ${altura} seu IMC é ${imc.toFixed(2)}`)