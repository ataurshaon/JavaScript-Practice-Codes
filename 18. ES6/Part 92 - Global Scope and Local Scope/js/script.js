//ES6
//var and let, const(ES6) 
//Scope

//Global Scope and Local Scope

/*
var a = 6;
a = a +10; // reassign of the variable

var a = "Shaon"; // redeclare of the same variable
console.log(a);

//Note: By var we can reassign the variable and also redeclare many times.

let b = 6;
b = b + 10;

// let b; // not redeclarable by let
console.log(b);

//Note: By let we can reassign the variable but not redeclare the variable by let.


const c = 7;
// c = c * 8; // can't reassign by const

console.log(c);
*/


//Global scope

var a = 1;
let b = 2;
const c = 3;
var d = 10;

console.log(`Global Scope:`, a, b, c);


//Local Scope

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function Scope:`, a, b, c, d); //accessing global scope by the variable d
}
test();
console.log(`Global Scope:`, a, b, c);

if(true){
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope:`, a, b, c);
}

console.log(`Global Scope:`, a, b, c); // only a value has been changed because of using var.


for(var a = 0; a < 10; a++){
    console.log(`Loop Scope:`, a);
}

console.log(`Global Scope:`, a, b, c); // only a value has been changed because of using var if we use let then the value will not change.