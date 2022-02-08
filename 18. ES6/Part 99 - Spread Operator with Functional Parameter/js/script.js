//Spread Operator with Function

let numbers = [23, 1, 0, -1];
console.log(Math.max(...numbers));//without spread operator it will show NaN output but because of using spread operator it will show output accurately


let person = ['Shaon', 'Ataur'];

let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

test(...person); //it is easy to do by spread operator.. otherwise we did it before by taking the index number of the array.