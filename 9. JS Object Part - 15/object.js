var student = { id: 121, phone: 01823578649, name: "shaon"};
var student2 = { id: 136, phone: 01676125959, name: "Rahi"};

console.log(student);
console.log(student2);

//for finding specific value of the object

var phoneNo = student.phone;
console.log(phoneNo);

//another way of finding the specific value of the object

var myName = student["name"];
console.log(myName);

//for changing the value of the object

student2.phone = "01345789093";
student.name = "Mamun";

//for insert new prperty in the object
student2.Skill = "Angular";
//for changing the value of the object
student2.Skill = "React";

console.log(student2);
console.log(student);

// using object one into another

var person = {
    firstName : "Ataur",
    lastName : "Shaon",
    age : 28,
    address:{
        City : "Feni",
        ZIP : 3233
    }
};

console.log(person);