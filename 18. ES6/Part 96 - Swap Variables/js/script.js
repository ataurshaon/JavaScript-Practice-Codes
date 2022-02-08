//Swap Variables

let a = 8;
let b = 20;

//old way
/*
let temp = a;
a = b;
b = temp;
*/

//ES6 Swap Variables

[a, b] = [b, a];

console.log(`a = ${a} b = ${b}`);