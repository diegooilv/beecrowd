import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8");
const lines: string[] = input.split("\n");

function Rafael(x: number, y: number) {
    return (3 * x) ** 2 + y ** 2;
}

function Beto(x: number, y: number) {
    return 2 * (x ** 2) + (5 * y) ** 2;
}

function Carlos(x: number, y: number) {
    return -100 * x + y ** 3;
}

const vezes: number = parseInt(lines[0]);

for (let i = 1; i <= vezes; i++) {
    const valor: number[] = lines[i].split(" ").map((x) => parseInt(x));
    const numeros: number[] = [Rafael(valor[0], valor[1]), Beto(valor[0], valor[1]), Carlos(valor[0], valor[1])];
    const maior: number = Math.max(...numeros);
    const indice: number = numeros.indexOf(maior);
    switch (indice) {
        case 0:
            console.log("Rafael ganhou");
            continue;
        case 1:
            console.log("Beto ganhou");
            continue;
        case 2:
            console.log("Carlos ganhou");
            continue;
    }

}