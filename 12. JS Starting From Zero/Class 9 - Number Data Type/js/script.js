// Number Data Type

var x = 3.123; //float number
console.log(x);
var x = 4; // integar number
console.log(x); 


// Exponential Number

var x = 123e5;
console.log(x);
var x = 123 * 10 ** 5;
console.log(x); // This will work as same 


// string type number

var number1 = "10";
var number2 = "20";
console.log(number1 + number2); // Only concatening two string type number only + is not working other arithmatic operator will work correctly.

// Infinity Number

var x = 25 / 0;
console.log(x);

//Convert to String

var number = 187;
var result = number.toString();
console.log(number);

//Convert to Binary

var number = 187;
var result = number.toString(2);
console.log(result);


//Convert to Octal

var number = 187;
var result = number.toString(8);
console.log(result);


//Converto to Hexadecimal

var number = 187;
var result = number.toString(16);
console.log(result);


// Precision (Remove the float number) For below if we use 4 then it will show all the float number

var number = 3.1416;
var result = number.toPrecision(1);
console.log(result);


//Convert Number To String and String To Number

var x = 10;
var y = x.toString();
console.log(y);
var b = parseInt(y);
console.log(b);

// Convert String to Number and Float Number

var x = "3.14867";
var y = parseInt(x);
var z = parseFloat(x);
console.log(y);
console.log(z);

// Multiple method using for converting number to string and string to number

var x = 3.1416;
var y = x.toString();
console.log(y);
var result = parseFloat(y.toString());
console.log(result);


//isNaN
// isNaN results boolean value true or false. If the value is number it shows false and if the value is not number then it shows true.

var a = "44";
console.log(isNaN(a));

var x = 44;
var y = isNaN(x);
console.log(y);