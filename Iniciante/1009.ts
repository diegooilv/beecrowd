const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const linhas = input.trim().split('\n');

const nome: string = linhas[0];
const salario: number = parseFloat(linhas[1]);
const vendas: number = parseFloat(linhas[2]);

const totalFimDoMes: number = salario + (vendas * 0.15);

console.log(`TOTAL = R$ ${totalFimDoMes.toFixed(2)}`);