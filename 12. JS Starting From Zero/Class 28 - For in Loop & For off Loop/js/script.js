//For in Loop & For of Loop
//for in = string/array/object
//for of = string/array


//for in loop
/*
let myName = "I Love JavaScript";

for(var x in myName){
    console.log(`index number ${x} and value ${myName[x]}`); 
}
*/


//for of loop
/*
let myName = "I Love JavaScript";
for(var x of myName){
    // console.log(x); //for of loop only print the value 
    console.log(`value ${x}`); //template literal ES6
}
*/


//for in loop in array
/*
let foodName = ["Cake", "Chocolate", "Ice Cream"];
for(var x in foodName){
    console.log(`Our Item: ${x}`);
}
*/

//for of loop in array
/*
let foodName = ["Cake", "Chocolate", "Ice Cream"];
for(var x of foodName){
    console.log(`Our Item:${x}`);
}
*/


//for in loop in object

let person = {
    myName : "Atif Aslam",
    profession : "Singer",
    country : "Pakistan",
    age : 35
}

for(x in person){
    console.log(`Property : ${x} value ${person[x]}`);
}

//By for of loop object will not be execute.