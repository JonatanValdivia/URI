'use strict';
const lines = prompt ('Digite os valores:').split(' ');
const X = Number(lines[0]);
const Y = Number(lines[1]);
function kmPercorridos(X, Y, kmPercorridos){
  kmPercorridos = X/Y;
  return kmPercorridos.toFixed(3);
}
console.log(`${kmPercorridos(X,Y, kmPercorridos)} km/l`);