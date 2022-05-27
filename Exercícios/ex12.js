let readlineSync = require('readline-sync')

let numero1 = readlineSync.question('Informe um número: ')
let numero2 = readlineSync.question('Informe um número: ')

let operacao = readlineSync.question('Qual operação deseja fazer?\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Finalizar\n');


do {
  switch (operacao) {
    case '1': 
      let soma = numero1 + numero2
      console.log(`Resultado da adição dos numeros escolhidos é: ${soma}`)
      break;
    case '2': 
      let sub = numero1 - numero2
      console.log(`Resultado da subtração dos numeros escolhidos é: ${sub}`)
      break;
    case '3': 
      let mult = numero1 * numero2
      console.log(`Resultado da multiplicação dos numeros escolhidos é: ${mult}`)
      break;
    case '4': 
      let div = numero1 / numero2
      console.log(`Resultado da divisão dos numeros escolhidos é: ${div}`)
      break;
    } 
    operacao = readlineSync.question('Qual operação deseja fazer?\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Finalizar\n');

} while (operacao!='5');