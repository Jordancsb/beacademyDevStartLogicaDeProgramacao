let readlineSync = require('readline-sync')

function consultarSaldo(saldo) {
  console.log(`Seu saldo atual é de R$${saldo}`);
}

function realizarDeposito(saldo, deposito) {
  saldo += parseFloat(deposito);
  console.log(`Deposito realizado com sucesso! Novo ${saldo}`);
  return saldo;
}

function realizarSaque(saldo, saque) {
  saque = parseFloat(saque);

  if (saque > saldo) {
    console.log('Não é possível realizar o saque. Saldo insuficiente!');
      return saldo;
  }

  saldo -= saque;
    console.log('Saque realizado com sucesso!');
      return saldo;
}

function main() {
  let op = undefined;
  let saldo = 0.00;

  do {
      op = readlineSync.question('Qual operação deseja fazer?\n1 - Consultar Saldo\n2 - Realizar Saque\n3 - Realizar Depósito\n4 - Sair\n');
      
      if (op == null || op == "") {
          break;
      }

      switch (op) {
          case '1':
              consultarSaldo(saldo);
              break;
          case '2':
              let saque = readlineSync.question('Qual valor deseja sacar?');
              saldo = realizarSaque(saldo, saque);
              break;
          case '3':
              let deposito = readlineSync.question('Qual valor deseja depositar?');
              saldo = realizarDeposito(saldo, deposito);
              break;
          case '4':
              console.log('Saindo do sistema...');
              break;
          default:
              console.log('Opção não existente.');
      }

  } while (op != 4);
}

main();
