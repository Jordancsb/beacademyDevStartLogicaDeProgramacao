let readlineSync = require('readline-sync')

let qtddPessoasMenores18 = 0;
let qtddPessoasMaiores60 = 0;
let idade = readlineSync.question('Informe seu idade: ')

do {
  if(idade<18)
  qtddPessoasMenores18++;
  if(idade>60)
  qtddPessoasMaiores60++;
  idade = readlineSync.question('Informe seu idade: ')

} while (idade > 0 && idade < 100 )

console.log(`O total de pessoas com menos de 18 são ${qtddPessoasMenores18}`)
console.log(`O total de pessoas com maior de 60 são ${qtddPessoasMaiores60}`)
