//Object Destructuring

let person = {
    firstName : 'Shaon',
    lastName : 'Rahman',
    dob : '25-03-1994'
}

/*
//old way

let fName = person.firstName,
lName = person.lastName,
dob = person.dob

console.log(fName, lName, dob);
*/


//ES6 Object Destructuring

/*
let {firstName, lastName, dob} = person; //here, should keep the object key name
console.log(firstName, lastName, dob);
*/

/*
let {firstName : fName, lastName : lName, dob : myBdate} = person; //define variable name for object keys
console.log(fName, lName, myBdate); //assigning the variable name
*/


//Object destructuring in function

function displayResult({firstName : fName, lastName : lName, dob : myBdate}){
    console.log(fName, lName, myBdate);
}
displayResult(person); 