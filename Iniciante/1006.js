var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const c = parseFloat(lines[2]);

const media = ( a * 2 + b * 3 + c * 5) / 10;

console.log("MEDIA = " + media.toFixed(1));