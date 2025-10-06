import * as fs from "fs";

const input: string = fs.readFileSync("/dev/stdin", "utf8");
const values: string[] = input.split(" ");

const lamp1: number = parseInt(values[0]);
const lamp2: number = parseInt(values[1]);
const lamp3: number = parseInt(values[2]);
const lamp4: number = parseInt(values[3]);

const total: number = (lamp1-1) + (lamp2-1) + (lamp3-1) + (lamp4);

console.log(total)
