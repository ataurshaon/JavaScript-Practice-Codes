// Class (ES6)
// Class is a template for creating object

/*
let person1 = {
    firstName : "Ataur",
    lastName : "Shaon",
    DOB : "23-03-1993",
    fullIName : function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
};


let person2 = {
    firstName : "Rahi",
    lastName : "Raihan",
    DOB : "23-03-1992",
    fullName : function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

//At first we take two object with same property and method. So, If we need 500 person information then we can't write code for 500 times. For solve this problem we canu use class template by following
*/



//Control multiple value by class template
//Class first letter should be capital letter
class Person {
    constructor(fName, lName, birthDay){
        this.firstName = fName;
        this.lastName = lName;
        this.dob = birthDay;
    }
    fullInfo(){
        console.log(`${this.firstName} ${this.lastName} ${this.dob}`); //method
    }
};

let person1 = new Person("Ataur", "Shaon", "23-03-1992");
person1.firstName = "Samin"; // changing the firstName value by object
console.log(person1.fullInfo()); // find all value by method


let person2 = new Person("Rahi", "Raihan", "23-03-1992");
console.log(person2.fullInfo());// find all value by method


let person3 = new Person("Mamun", "Rashid", "23-03-1994");
console.log(person3.fullInfo());// find all value by method
