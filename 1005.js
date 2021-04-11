'use strict';
const lines = prompt ('Digite os valores:').split(' ')
const A = Number(lines[0]);
const B = Number(lines[1]);

const media = (A * 3.5 + B * 7.5)/ 11;
console.log(`MEDIA = ${media.toFixed(5)}`)