//Rest Operator
//Rest Operator opposite of spread operator

/*
let fruits = ['Apple', 'Mango', 'Banana', 'Pine-Apple'];
let[first, second, ...third] = fruits; 

console.log(first);
console.log(second);
console.log(third);//bind the last two array value together by rest operator
*/


/*
//Rest Operator on Object

let person = {
    fName : 'Shaon',
    lName : 'Ataur',
    dob : '23-03-1993'
}

let {fName, ...lName} = person;
console.log(fName);
console.log(lName);//here, because of rest operator rest of the object property are shown 
*/


/*
//Rest Operator on Function

let test = (fName, age, ...num) => {
    console.log(fName);
    console.log(age);
    console.log(num);
}
test('Shaon', 28, 50, 60, 70, 80);//here, for three parameter conceded 3 value but rest of the numbers are shown an array for the ... rest operator sign of the third parameter
*/

let moreNumber = [2, 3, 4, 5];

let test = (fName, ...number) => {//in parameter if we use 3 dots then it is rest operator
    console.log(fName);
    console.log(number);
}
test('Shaon', 40, 50, 60, 70, 80);
test('Shaon', ...moreNumber);// if we use 3 dots in arguement then it is spread operator

