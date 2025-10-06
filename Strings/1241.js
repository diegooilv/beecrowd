var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

const count = parseInt(lines[0], 10);

for (let i = 1; i <= count && i < lines.length; i++) {
  const parts = lines[i].trim().split(/\s+/);
  const valorUm = parts[0];
  const valorDois = parts[1];
  const tamanhoValorDois = valorDois.length;

  if (valorUm.slice(-tamanhoValorDois) === valorDois) {
    console.log("encaixa");
  } else {
    console.log("nao encaixa");
  }
}
