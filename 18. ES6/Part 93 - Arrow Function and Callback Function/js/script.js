//Define a Function

/*
function hello(){
    console.log("Hello World");
}
hello();
*/

//Arrow Function
//Arrow function can be store in a variable
//For single parameter no need to use first parenthesis
//No need to use curley braces for single line array function body


/*
//let hello = (name) => {console.log(name)};

let hello = name => console.log(name);
hello('Shaon');
*/


/*
function getSquare(number){
    return number * number;
}

console.log(getSquare(4));
*/


//Arrow Function

/*
let getSquare = (number) => {return number * number};

console.log(getSquare(4));
*/

/*
let getSquare = number => console.log(number * number); // no need to write return in arrow function

getSquare(4);
*/



//Callback Function
//In one function calling another function is callback function
//Here, forEach is a function where we are calling another function thats why it is callback function

//numbers = [1,2,3,4,5];

/*
numbers.forEach(function(item){ //function expression
    console.log(item);
});
*/

/*
let printAll = function(item){
    console.log(item);
}
numbers.forEach(printAll); //using variable of the function expression
*/

/*
let printAll = item => console.log(item);

numbers.forEach(printAll); //using arrow function variable
*/


//numbers.forEach(item => console.log(item)); //arrow function in single line



//Mapping --> Creating New Array by map function

/*
numbers = [1, 2, 3, 4, 5, 6];

function squareAll(item){
    return item * item;
}

let squareNum = numbers.map(squareAll);
console.log(squareNum);
*/


//Mapping with Arrow Function

numbers = [1, 2, 3, 4, 5, 6];

let squareNum = numbers.map(item => item * item);

console.log(squareNum);
