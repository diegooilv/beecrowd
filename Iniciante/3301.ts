import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8");
const numeros: number[] = input.trim().split(" ").map(Number);
const nomes: string[] = ["huguinho", "zezinho", "luisinho"];

const max: number = Math.max(...numeros);
const min: number = Math.min(...numeros);

const indice: number = numeros.findIndex(n => n !== max && n !== min);

console.log(nomes[indice]);
