// Premetive Data Type = Number, String, Boolean -- Deals with value
// Reference Type Data = Array, Object -- Deals with Address

//Number
let a = 7;
let b = a;
console.log(b);
a = 10;
console.log(b); //It will not change the value of b because of assigning a value. But a will output latest value.

//String
let x = "Shaon";
let y = x;
console.log(y);
x = "Rahi";
console.log(y); //It will not change the value of y because of assigning x value. But x will output latest value.
console.log(x);


//Reference Type Data.. It will change the value if assigns latest value and work on latest value.

var number = [1, 2, 3];
var newNumber = number;
console.log(number);
console.log(newNumber);
number[1] = 20;
console.log(number); 
console.log(newNumber)