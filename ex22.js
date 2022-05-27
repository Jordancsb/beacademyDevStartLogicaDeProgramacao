let readlineSync = require('readline-sync')

let matriz = [[1,2,3], [4,5,6], [7,8,9]];

function calculo(matriz) {
  const count = matriz.length;
    let result = 0;
      for(let i = 0; i < count; i++) {
    result += matriz[i][i];
  }
    return result;
}
              
console.log(calculo(matriz));

function calculo2(matriz) {
  const count = matriz.length;
    let result = 0;
      for(let j = 0; j < count; j++) {
    result += matriz[j][j];
  }
    return result;
}
              
console.log(calculo2(matriz));
