//Array Iteration For Each

/*
var foods = ["Cake", "Ice Cream", "Chocolate", "Bread"];

//1st Parameter : Element/Item
//2nd Parameter : Index Number
//3rd Parameter : Whole Array

foods.forEach(function(item, index, wholeArray){
    console.log(item, index, wholeArray);
});
*/



//Another way of for each function expression

/*
var foods = ["Cake", "Ice Cream", "Chocolate", "Bread"];

let printEverything = function(item, index, wholeArray){
    console.log(item, index, wholeArray);
};

foods.forEach(printEverything);
*/



//Using template literals in foreach

/*
var foods = ["Cake", "Ice Cream", "Chocolate", "Bread"];

let result = function(item, index){
    console.log(`Index Number: ${index}, Item Number: ${item}`);
};

foods.forEach(result);

//Note: Output should follow the parameter sequence whether I can change the parameter in output.
//Note: For foreach function there is no return
*/


//Another way of foreach function in a variable

/*
var foods = ["Cake", "Ice Cream", "Chocolate", "Bread"];

let foodsName = foods.forEach(function(item, index, arr){
    console.log(item, index, arr);
});
*/


//Aray Iteration in Map
/*
var foods = ["Cake", "Ice Cream", "Chocolate", "Bread"];


function addSomething(item, index){
    return `${item} is a food`;
}

let result = foods.map(addSomething);

console.log(result);
*/

/*
//Another way of map with template literals

var foods = ["Cake", "Ice Cream", "Chocolate", "Bread"];

let foodItem = foods.map(function(item){
    return `${item} good food`;
});

console.log(foodItem);
*/



// Finding square number with mapping

/*
var number = [1, 32, 31, 24];

var squareNumber = number.map(function(item){
    return item * item; 
});

console.log(squareNumber);
*/


