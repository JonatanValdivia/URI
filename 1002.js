'use strict';
const lines = prompt ('Digite o valor do raio:').split(' ')
const raio = Number(lines[0]);
//const raio = +(lines[0]);
const pi = 3.14159;
const area = pi * raio ** 2;

console.log(`A=${area.toFixed(4)}`); 