'use strict';
const lines = prompt ('Digite os valores:').split(' ');

const raio = Number(lines[0]);
function volume(){
  const Volume = (4/3.0) * 3.14159 * raio **3
  return Volume.toFixed(3);
}

console.log('VOLUME = ' + volume())