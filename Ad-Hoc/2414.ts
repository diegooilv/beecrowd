import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8").trim();
const numeros: number[] = input
    .split(" ")
    .map(Number)
    .filter((n) => n !== 0);

const maior = Math.max(...numeros);
console.log(maior);
