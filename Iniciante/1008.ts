const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const linhas = input.trim().split('\n');

const numero: number = parseInt(linhas[0]);
const horas: number = parseInt(linhas[1]);
const valor: number = parseFloat(linhas[2]);
let salario: number = valor * horas;
salario = salario.toFixed(2);

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);