'use strict';
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split(' ').map(item => parseFloat(item));
const [A, B, C] = lines;
lines.pop();
const trianguloRetangulo = (A*C)/2.0;
const circuloDeRaio = 3.14159* Math.pow(C, 2);
const trapesio = ((A+B)*C)/2.0;
const quadrado = Math.pow(B, 2);
const retangulo = A*B;

console.log('TRIANGULO: ' + trianguloRetangulo.toFixed(3));
console.log('CIRCULO: ' + circuloDeRaio.toFixed(3));
console.log('TRAPEZIO: ' + trapesio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3)); 