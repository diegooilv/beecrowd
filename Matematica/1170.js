var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const resultados = [];
for (let i = 1; i < lines.length; i++) {
  let valor = parseFloat(lines[i]);
  let count = 0;
  while (valor > 1) {
    count += 1;
    valor = valor / 2;
  }
  if(count < 1){
      continue;
  }
  resultados.push(count);
}

for (const resultado of resultados) {
  console.log(`${resultado} dias`);
}
