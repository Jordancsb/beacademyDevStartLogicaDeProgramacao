let readlineSync = require('readline-sync')

let saldo = 1000;
let nome = readlineSync.question('Informe seu nome: ')
let conta = readlineSync.question('Informe numero da sua conta sem digito: ')
let operacao = readlineSync.question('Qual operação deseja fazer?\n1 - Emprestimo\n2 - Saque\n3 - Depósito\n4 - Transferencia\n5 - Sair\n')
let valor = readlineSync.question('Qual valor desejado')
let novoSaldo = 0;

switch (operacao) {
  case '1':
    novoSaldo = saldo + parseInt(valor);
    console.log(novoSaldo)
  case '2':
    novoSaldo = saldo - parseInt(valor);
    console.log(novoSaldo)
  case '3':
      novoSaldo = saldo + parseInt(valor);
      console.log(novoSaldo)
  case '4':
      novoSaldo = saldo + parseInt(valor);
      console.log(novoSaldo)
    }

console.log(`Operação ${operacao} no Banco BOM agencia: 0001 conta ${conta} para ${nome}\n Saldo inicial: ${saldo} Operação ${operacao}: ${valor} Saldo final: ${novoSaldo}.`)
