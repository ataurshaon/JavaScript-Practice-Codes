//COnditional Part 2

/*
var personOne = "Jamal";
var personTwo = "Kamal";
var AreTheyBrother = true;
if(personOne == "Jamal" && personTwo == "Kamal" && AreTheyBrother ==true){
    console.log("They Are Brother")
}else{
    console.log("They are not brother")
}
*/

/*
var n = 0;
if(n > 0){
    var result = "This number " + n + " is Positime";
}else {
    var result = "This number " + n + " is negative"
}
console.log(result);
*/

//Odd or Even number find out 
/*
var n = 12;
if(n % 2 == 0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}
*/


var n = 12;
var result; // undefined variable
var remainder = n % 2;
if(n == 0){
    result = "This is a 0 value"
}
else if(remainder == 0){
    result = "This is an even number"
}else{
    result = "This is an odd number"
}
console.log(result);