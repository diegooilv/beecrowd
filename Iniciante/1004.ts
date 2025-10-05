const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const linhas = input.trim().split('\n');
const A: number = parseInt(linhas[0]);
const B: number = parseInt(linhas[1]);

const PROD: number = A * B;
console.log(`PROD = ${PROD}`);