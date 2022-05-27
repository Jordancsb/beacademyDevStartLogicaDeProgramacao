let readlineSync = require('readline-sync')

let produto1 = readlineSync.question('Informe o produto: ')
let produto2 = readlineSync.question('Informe o produto: ')
let produto3 = readlineSync.question('Informe o produto: ')

let listaProdutos = [produto1, produto2, produto3]

for (let count = 0; count < listaProdutos.length; count++)
    console.log("Lista de Produtos #", count, ": ", listaProdutos[count]);