let readlineSync = require('readline-sync')

let multiplo = readlineSync.question('Informe um numero: ')
let range = readlineSync.question('Informe o numero limite: ')

for (let i = 1; i <= range; i++) {
    if ((i % multiplo) == 0) {
      console.log(i);
    }
  }