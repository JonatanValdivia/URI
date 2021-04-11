'use strict';
const lines = prompt ('Digite os valores:').split(' ');
let valor = parseInt(lines[0]);
const notas = [100, 50, 20, 10, 5, 2, 1];
console.log(valor)

for(let nota of notas){
  let quantidadesNotas = parseInt(valor / nota);
  console.log(`${quantidadesNotas} nota(s) de R$ ${nota},00`);
  valor = valor % nota;
}

/*for(let i = 0; i <= 7; i++){
let quantidadesNotas = parseInt(valor / notas[i]);
console.log(`${quantidadesNotas} nota(s) de R$ ${notas[i]},00`);
valor = valor % notas[i];
}*/


