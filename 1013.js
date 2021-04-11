'use strict';
const lines = prompt ('Digite os valores:').split(' ').map(item => parseInt(item));
const [A, B, C] = lines;
const maiorAB = (A + B + Math.abs(A - B))/2;
const maiorC = (C + maiorAB + Math.abs(maiorAB - C)) /2;
console.log(`${maiorC} eh o maior`);

/* 7 14 106 */ 