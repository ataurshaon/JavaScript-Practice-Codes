// String Operator
//concatening or concatenation

/*
var line1 = "Hello";
var line2 = "World";
var result = line1 + " " + line2;
console.log(result);
*/

/*
var number = 36;
var myName = "Shaon";
var result = number + " " + myName; // concatening with string number will be shown as string 
console.log(result);
*/

/*
var number1 = 36;
var number2 = 4;
var finalNumber = number1 + number2;
console.log(finalNumber);
*/

//left to right JS works
// with the concatening with string it will convert the number into string and print out individually.

/*
var myName = "Shaon";
var number1 = 40;
var number2 = 30;
var finalResult = myName + number1 + number2; 
console.log(finalResult);
*/

/*
//JS read left to right so at first it add the two number

var number1 = 20;
var number2 = 30;
var myName = "Shaon";
var finalResult = number1 + number2 + myName; 
console.log(finalResult);
*/

// As the numbers are string it will operate all the arithmatic operation except +. Because for + in JS it will concate the two string.
/*
var number1 = "70";
var number2 = "3";
console.log(number1 + number2);
*/

// If we want to do any arithmatic operation except + it will show NaN (Not a Number) which is a special character of JS.
/*
var number = "10";
var myName = "Shaon";
console.log(number / myName);
*/