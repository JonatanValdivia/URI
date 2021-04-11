'use strict';
const lines = prompt ('Digite os valores:').split(' ');

const numeroFuncionario = Number(lines[0])
const horasTrabalhadas = Number(lines[1])
const salario = Number(lines[2])
const salarioTotal = horasTrabalhadas * salario
console.log(`NUMBER = ${numeroFuncionario}`)
console.log(`SALARY = U$ ${salarioTotal.toFixed(2)}`)