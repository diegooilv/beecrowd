import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8");
const values: string[] = input.split(" ");
const newLine: string[] = input.split("\n");
let newNota: number;

const a: number = parseFloat(values[0]);
const b: number = parseFloat(values[1]);
const c: number = parseFloat(values[2]);
const d: number = parseFloat(values[3]);

const media: number = (a * 2 + b * 3 + c * 4 + d * 1) / 10
console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7) {
    console.log("Aluno aprovado.");

} else if (media >= 5 && media < 7) {
    console.log("Aluno em exame.")
    newNota = parseFloat(newLine[1]);
    console.log(`Nota do exame: ${newNota.toFixed(1)}`);
    if ((newNota + media) / 2 >= 5) {
        console.log("Aluno aprovado.")
        console.log(`Media final: ${((newNota + media) / 2).toFixed(1)}`)
    } else {
        console.log("Aluno reprovado.")
    }
} else if (media < 5) {
    console.log("Aluno reprovado.")
}