'use strict';
const lines = prompt ('Digite os valores:');
const variaveis = lines.split('\n');
const [x1, y1] = variaveis[0].split(' ');
const [x2, y2] = variaveis[1].split(' ')
const distancia = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1), 2));
console.log(distancia.toFixed(4));
/* 
1.0 7.0
5.0 9.0 
*/ 