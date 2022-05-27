let readlineSync = require('readline-sync')

let nome = readlineSync.question('Informe seu nome: ')
let idade = readlineSync.question('Informe seu idade: ')
console.log(`Olá! ${nome} sua ${idade} anos`)

if(idade>18) {
  console.log('Velho')
} if (idade != 25) {
  console.log('Idade diferente de 25')
} if (idade != 25 && nome == 'Marcos') {
  console.log('Idade diferente de 25 e seu nome é Marcos')
} if (idade != 25 || nome == 'Marcos') {
  console.log('Seu nome é Marcos ou você tem 25 anos')
} if (idade%2===0) {
  console.log('Resto da divisão da sua idade dá zero')
}