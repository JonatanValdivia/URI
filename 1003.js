'use strict';
const lines = prompt ('Digite os valores:').split(' ')
const SOMA = (A, B) => A + B;
const resultado = lines.map(Number).reduce(SOMA);
console.log(`SOMA = ${resultado}`)

/*const [A, B] = lines.map(Number);
const SOMA = A + B;

console.log("SOMA = " + SOMA);  */