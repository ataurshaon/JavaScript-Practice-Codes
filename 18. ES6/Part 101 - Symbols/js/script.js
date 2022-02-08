//Symbols

/*
let a = Symbol();
let b = Symbol();

console.log(a, b);
console.log(a == b);//these are not equal result is false
console.log(a === b);//type is not equal result is false
*/


/*
//Symbol use in Object
//Symbol can't be an object property

let a = Symbol

let person = {
    name : 'Shaon',
    age : '23', 
    [a] : 'Hello World'

}
console.log(person); //Symbol can't be access. It only shows function of the Symbol
console.log(Object.getOwnPropertyNames(person));//Symbol can't be access.It only show function of symbol
console.log(Object.getOwnPropertySymbols(person)); //Symbol access function
console.log(Object.keys(person));//Symbol can't be access here
console.log(JSON.stringify(person));//Symbol can't be access here


for(x in person){
    console.log(x);
}
*/

let sym1 = Symbol('Hello');//Using Symbol paramter and it is accessable
let sym2 = Symbol('Hello');

console.log(sym1);
