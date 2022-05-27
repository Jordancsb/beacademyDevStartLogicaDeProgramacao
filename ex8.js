let readlineSync = require('readline-sync')

let numero = readlineSync.question('Informe um numero: ')

function tabuada(){
  for(let count=1; count<=10 ; count++)
  console.log(`${numero} x ${count} = ${count * numero}`)
}

tabuada()