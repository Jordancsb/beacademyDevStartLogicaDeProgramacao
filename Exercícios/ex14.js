let readlineSync = require('readline-sync')

let nome = readlineSync.question('Informe seu usuario ou Pressione 1 para Sair: ')
let senha

  if(nome === 'Marcos') {
    senha = readlineSync.question('Informe seu senha: ')
  }
  if(senha === '1234') {
    console.log(`Bem vindo ${nome}!`)
  }
  if(nome === '1' || senha === '1') {
    console.log('Programa será finalizado')
  }
  if(nome != '1' && nome != 'Marcos') {
    console.log('Usuario invalido! Tente novamente...')
  }