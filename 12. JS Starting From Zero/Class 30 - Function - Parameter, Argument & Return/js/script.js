//Function - Parameter & Argument

//Parameter works like variable

/*
function saySomething(para01){
    alert(para01); //Calling parameter
}

saySomething("Hello World !"); //Value assigned for parameter
*/

// Function with template string
/*
function saySomething(para01){
    alert(`Hello ${para01}`); //using template string
}

saySomething("World"); //argument
*/

//By using default value for parameter
/*
function saySomething(para01 = "text"){
    alert(`Hello ${para01}`);
}

saySomething("World"); // Now this value will be shown
*/

//Function with multiple parameter
/*
function saySomething(fname, lname, age){
    console.log(`Hello ${fname} ${lname}, age: ${age}`)
}

//saySomething("Ataur", "Rahman", 25); // Assigning value directly for parameter

//Also use the value by assigning in variable as below

let firstname = "Ataur";
let lastname = "Rahman";
let age = 25;

saySomething(firstname, lastname, age)
*/

//We can add double quote in the parameter value so that it can not be shown undefined when the parameter has no value and also can add extra parameter and value as below.

/*
function saySomething(fname = " ", lname = " ", age = " ", village = " "){
    console.log(`Hello ${fname} ${lname} age: {age} village: ${village}`);
}
let firstname = "Ataur";
let lastname = "Rahman";
let age = 25;
let village = "Rampur";

saySomething(firstname, lastname, age, village);
*/

//For store function in a variable we should use return as below
/*
function addTwoNumbers(a = 0, b = 0) {
    return(a+b);
}

let sum = addTwoNumbers(10, 20); //function store in a variable
console.log(sum);
*/

//Another example of using return value
/*
function saySOmething(fname = " ", lname = " ", age = " ", village = " ") {
    return(`Hello ${fname} ${lname} age: ${age} village: ${village}`);
}

let firstName = "Ataur";
let lastName = "Rahman";
let age = 25;
let village = "Rampur";

var myDetails = saySOmething(firstName, lastName, age, village);
console.log(myDetails);
*/


//By using function multiple argument as below

function randomNumber(name){
    return(`My Name is ${name}`);
}

let name1 = randomNumber("Ataur");
let name2 = randomNumber("Rahman");
let name3 = randomNumber("Shaon");

console.log(name1, name2, name3); 