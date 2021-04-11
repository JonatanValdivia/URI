'use strict';
const lines = prompt ('Digite os valores:').split(' ');
const tempo = Number(lines[0]);
const velocidade = Number(lines[1]);
const litros =  (velocidade/12) * tempo;
console.log(litros.toFixed(3))