//Sub Class
//Inheritance


//1st class
//Base class

class Person {
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
};



//2nd class

class Customer extends Person{ //inherit the class Person
    constructor(fname, lname, phone, memberId){
        super(fname, lname); //link with the inherited class by super method

        this.phone = phone;
        this.memberId = memberId;
    }
    fullName(){
        console.log(`Welcome ${this.firstName} ${this.lastName}`);
    }
};


let person1 = new Person("Ataur", "Shaon");
console.log(person1);
console.log(person1.greeting()); //accessing method from own class
console.log(person1.fullName()); // not accessable from inherited class to base class


let person2 = new Customer("Rahi", "Raihan", 01823578649, 123);
console.log(person2);
console.log(person2.greeting()); //accessing method from the base class by inheritance
console.log(person2.fullName()); // accessing method from own class