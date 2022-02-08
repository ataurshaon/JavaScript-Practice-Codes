//Array Data Type

var countries = ["Bangladesh", "USA", "UK"];
console.log(countries);
console.log(countries[2]); //find out array value by index number of Array which starting from 0.
console.log(countries.length); // find out the array length.


//replace the array value

// countries[1] = "Poland";
// console.log(countries);


// store in a variable of array index value

var countries = ["Bangladesh", "USA", "UK"];
var singleCountry = countries[2];
console.log(singleCountry);


//Add extra value in array
var countries = ["Bangladesh", "USA", "UK"];
countries[3] = "Portugal";
console.log(countries);
countries[countries.length] = "Norway";
console.log(countries);


//Array multiple value can pass by using push and by pop it will remove from last value of the array.
var countries = ["Bangladesh", "USA", "UK"];
countries.push("China", "India", "Japan", "Korea");
console.log(countries);
countries.pop();
console.log(countries);


// For removing the array value at the starting use shift method and for adding the array value at starting of the array use unshift method.

var countries = ["Bangladesh", "USA", "UK"];
countries.shift();
console.log(countries);
countries.unshift("Pakistan");
console.log(countries);
countries.unshift("Bangladesh", "Nepal", "China");
console.log(countries);