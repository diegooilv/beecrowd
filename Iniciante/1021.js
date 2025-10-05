var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
let valorOriginal = parseFloat(lines[0]);
let valorEmCentavos = Math.round(valorOriginal * 100);
const denominacoesCentavos = [
  10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1,
];

const denominacoesDisplay = [
  "100.00",
  "50.00",
  "20.00",
  "10.00",
  "5.00",
  "2.00",
  "1.00",
  "0.50",
  "0.25",
  "0.10",
  "0.05",
  "0.01",
];

const contagens = [];

for (let i = 0; i < denominacoesCentavos.length; i++) {
  const denom = denominacoesCentavos[i];
  const quantidade = Math.floor(valorEmCentavos / denom);
  contagens.push(quantidade);
  valorEmCentavos %= denom;
}

console.log("NOTAS:");
for (let i = 0; i < 6; i++) {
  console.log(`${contagens[i]} nota(s) de R$ ${denominacoesDisplay[i]}`);
}

console.log("MOEDAS:");
for (let i = 6; i < 12; i++) {
  console.log(`${contagens[i]} moeda(s) de R$ ${denominacoesDisplay[i]}`);
}
