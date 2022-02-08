//Object Method

let person  = {
    firstName : "Ataur",
    lastName : "Shaon",
    DOB : "29-08-1990", // String, number, array, object, function

    fullName : function(){
        return `${this.firstName} ${this.lastName}`; // In same object in function or same method for calling the object property should use this keyword.
    }
}

console.log(person.firstName);
console.log(person.fullName()); //fullName property is a method now so need to use parenthesis.


let str = "Hello World !"; 
console.log(str.length); // In JavaScript all variable are working as object, here we are counting the length like object, so in javascript variables are also work as object.

console.log(str.split()); // Creating array using split method.


