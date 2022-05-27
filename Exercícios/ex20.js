let readlineSync = require('readline-sync')

let nome = readlineSync.question('Informe seu nome: ')
let CPF = readlineSync.question('Informe seu CPF: ')
let RG = readlineSync.question('Informe seu RG: ')
let dataDeNascimento = readlineSync.question('Informe seu Data de Nascimento: ')
let coeficienteDeRendimento = readlineSync.question('Informe seu Coeficiente de Rendimento: ')

let arr = [nome, CPF, RG, dataDeNascimento, coeficienteDeRendimento]

console.log(arr)
