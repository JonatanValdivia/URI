'use strict';
const lines = prompt ('Digite os valores:').split(' ');
const numeroInterio = lines[0];
const minutos = (60 * numeroInterio) / 30;
console.log(`${minutos} minutos`);