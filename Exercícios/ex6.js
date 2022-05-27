let readlineSync = require('readline-sync')


let geometria = readlineSync.question('Quadrado ou Triangulo?! ')
let lado1 = readlineSync.question('Informe medida de uma aresta: ')
lado1 = parseInt(lado1)
let lado2 = readlineSync.question('Informe medida de uma aresta: ')
lado2 = parseInt(lado2)

  if(geometria!='Quadrado') {
    let lado3 = readlineSync.question('Informe medida de uma aresta: ')
    lado3 = parseInt(lado3)
    let perimetroT = (lado1 + lado2 + lado3)
    console.log(`Figura escolhida Triangulo com perimetro ${perimetroT}`)
  }
  if(geometria!='Triangulo') {
    let perimetroQ = (lado1 + lado2) * 2
    console.log(`Figura escolhida Quadrado com perimetro ${perimetroQ}`)
  }
