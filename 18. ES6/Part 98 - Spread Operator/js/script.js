//Spread Operator

/*
//Using spread operator on string
let str = 'Bangladesh';
let newStr = [...str];
console.log(newStr);// get all the character individually in array
*/


/*
//Spread operator on Array

let fruit1 = ['Apple', 'PineApple', 'Guava'];
let fruit2 = ['Orange', 'BlackBerry'];
let newFruit = 'JackFruit';

let newArr = [...fruit1, fruit2, newFruit];
console.log(newArr); //get all array together by spread operator
*/


//Spread Operator on Object (ES8)

let person = {
    fName : 'Shaon',
    lName : 'Rahman',
}

let newPerson = {...person, dob : '23-03-1994'}; //By spread operator also can add new property of an object
console.log(newPerson);

