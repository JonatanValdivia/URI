//Estrutura:
//Split transforma uma string em array (dependendo do demilitador - nessa caso será o espaço).
const lines = prompt ('Digite os valores de entrada').split(' ')
console.log(lines);
const [A, B] = lines.map(Number);/*map aplica uma função a todos os elementos de um array*/
/*const A = Number(lines[0]);
const B = Number(lines[1];*/
const X = A + B;
console.log(`X = ${X}`);