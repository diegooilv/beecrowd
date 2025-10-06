import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8");
const lines: string[] = input.split("\n");

const dayUm: string = lines[0];
const horaDayUm: string = lines[1];
const dayDois: string = lines[2];
const horaDayDois: string = lines[3];

const days: number[] = [parseInt(dayUm.split(" ")[1]), parseInt(dayDois.split(" ")[1])]
const horasDiaUm: number[] = [parseInt(horaDayUm.split(":")[0].trim()), parseInt(horaDayUm.split(":")[1].trim()), parseInt(horaDayUm.split(":")[2].trim())];
const horasDiaDois: number[] = [parseInt(horaDayDois.split(":")[0].trim()), parseInt(horaDayDois.split(":")[1].trim()), parseInt(horaDayDois.split(":")[2].trim())];

const totalSegundosDiaUm = horasDiaUm[0]*3600 + horasDiaUm[1]*60 + horasDiaUm[2];
const totalSegundosDiaDois = horasDiaDois[0]*3600 + horasDiaDois[1]*60 + horasDiaDois[2];

let difTotalSegundos = (days[1] - days[0])*86400 + (totalSegundosDiaDois - totalSegundosDiaUm);

const difDias = Math.floor(difTotalSegundos / 86400);
difTotalSegundos %= 86400;
const difHoras = Math.floor(difTotalSegundos / 3600);
difTotalSegundos %= 3600;
const difMinutos = Math.floor(difTotalSegundos / 60);
const difSegundos = difTotalSegundos % 60;

console.log(`${difDias} dia(s)`);
console.log(`${difHoras} hora(s)`);
console.log(`${difMinutos} minuto(s)`);
console.log(`${difSegundos} segundo(s)`);
