//Array Data Type Last Part

// Using empty array to pass value using push method.
var number = [];
number.push(1, 2, 3, 4);
console.log(number);

//Convert string to array by using split method

var str = "Bangladesh";
var arr = str.split(" ");
console.log(arr);

// Array use space as an empty array 

var str = "Hello World";
var arr = str.split(" ");
console.log(arr);


//For making word by word array for a large string.

var str = "Bangladesh is a beautiful country";
var arr = str.split(" ");
console.log(arr);


//String to Array

var countries = ["Bangladesh", "USA", "UK"];
var result = countries.toString(); // Because of using toString method after every word it will show , sign so it is not completely conversion.
console.log(result);
var result = countries.join(" "); // using empty string with one white space it will convert array to string perfectly.
console.log(result);


//for all string to array and array to string conversion 

var str = "I Love JS";
console.log(str);
var arr = str.split(" ");
console.log(arr);
var arrToStr = arr.join(" ");
console.log(arrToStr);
var strToArr = arrToStr.split(" ");
console.log(strToArr);
strToArr.push("Love It");
console.log(strToArr);
var ArrToStr = strToArr.join(" ");
console.log(arrToStr);


// Concat with two array

var countries1 = ["Bangladesh", "China", "Pakistan"];
var countries2 = ["USA", "UK", "Nepal"];

var result = countries1.concat(countries2);
console.log(result);
result.sort(); //sorting ascending
console.log(result);
result.reverse(); //sorting descending
console.log(result);