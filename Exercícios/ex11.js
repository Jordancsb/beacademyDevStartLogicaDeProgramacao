let readlineSync = require('readline-sync')

let nome = readlineSync.question('Informe seu nome: ')
let senha = readlineSync.question('Informe seu senha: ')

if(nome==='Marcos' && senha==='paylivre') {
  console.log('Bem vindo Marcos!')
} if(senha!='paylivre') {
  console.log('Senha invalida')
  console.log('Refaça a operação')
} if(nome!='Marcos') {
  console.log('Usuario invalido')
  console.log('Refaça a operação')
}