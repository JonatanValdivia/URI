'use strict';
const lines = prompt ('Digite os valores:').split(' ');
const nomeVendedor = lines[0];
const salarioFixo = Number(lines[1]);
const totVendas = Number(lines[2]);
const comissao = 15/100;
const salarioTotal = (totVendas * comissao) + salarioFixo;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`);