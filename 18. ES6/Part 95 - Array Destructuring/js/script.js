//Array Destructuring

let fruits = ['Apple', 'Grape', 'Orange'];

/*
//Old Way
let fruit1 = fruits[0];
let fruit2 = fruits[1];

console.log(fruit1, fruit2);
*/


//Array Destructuring

//let [fruit1, fruit2, fruit3] = fruits;
let [fruit1, , fruit3] = fruits; //for skipping any array value use , sign between the variable

console.log(fruit1, fruit3);