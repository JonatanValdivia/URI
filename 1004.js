'use strict';
const lines = prompt ('Digite os valores:').split(' ')
//Necessário para removerr a última linha vazia no URI (para não dar erro):
//lines.pop(); 
const PROD = (numero1, numero2) => numero1 * numero2;
const resultado =  lines.map(Number).reduce(PROD);
console.log(`PROD = ${resultado}`)