import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8");
const lines: string[] = input.split("\n");

const numbers: number[] = lines.map((line) => Number(line)).filter((n) => !isNaN(n));
const max: number = Math.max(...numbers);

console.log(max);
console.log(numbers.indexOf(max) + 1)
