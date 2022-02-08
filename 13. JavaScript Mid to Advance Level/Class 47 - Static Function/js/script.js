//Static Function


class Person{
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    static test(){ //declaring static function
        console.log(`I am Static Function`)
    }
}

let person1 = new Person("Ataur", "Shaon");
console.log(person1);
console.log(person1.greeting()); //function output of the class with object

console.log(Person.test()); // static function output can not be shown with the object. For showing static function output we should use the class name with the function. But for function expression or anonymus function we can create an object and see the output of the function.