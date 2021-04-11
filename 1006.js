'use strict';
const lines = prompt ('Digite os valores:').split(' ')
const A = Number(lines[0]);
const B = Number(lines[1])
const C = Number(lines[2])

const MEDIA = ((A * 2)/10 + (B * 3)/10 + (C * 5)/10);
console.log(`MEDIA = ${MEDIA.toFixed(1)}`)