'use strict';
const lines = prompt ('Digite os valores:').split('\n');
const peca1 = lines.shift().split(' ');
const peca2 = lines.shift().split(' ');

const NumeroIdPeca1 = peca1.shift();
const quantidadePeca1 = peca1.shift();
const valorUnitarioPeca1 = peca1.shift();
const valorTotalPeca1 = quantidadePeca1 * valorUnitarioPeca1;

const NumeroIdPeca2 = peca2.shift();
const quantidadePeca2 = peca2.shift();
const valorUnitarioPeca2 = peca2.shift();
const valorTotalPeca2 = quantidadePeca2 * valorUnitarioPeca2;

const valorAPagar = valorTotalPeca1 + valorTotalPeca2;

console.log(`VALOR A PAGAR: R$ ${valorAPagar.toFixed(2)}`);



