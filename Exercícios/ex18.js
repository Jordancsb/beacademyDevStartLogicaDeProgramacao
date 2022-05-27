let readlineSync = require('readline-sync')

let saldo = 1000
let novoSaldo = 0

let operacao = readlineSync.question('Qual operação deseja fazer?\n1 - Saque\n2 - Sair\n')
let valor = readlineSync.question('Qual valor do saque')


if(operacao === '1' && valor <= 1000) {
    novoSaldo = saldo - valor
    console.log(`Valor do saque: ${valor}\nSaldo final: ${novoSaldo}`)
} if(operacao === '2') {
  console.log('Obrigado por utilizar nossos serviços!')
}
