var myList = ["Rahim", "Karim", "Shaon", "Mamun"];
console.log(myList[3]);

//position = index/offset

//for checkign array length
console.log(myList.length);


//Add extra element in array

myList[4] = "Samin";
myList[5] = "Ateeb";
console.log(myList);


// Add extra element by using push and it will add the array value at the end.

myList.push("Rahi");
myList.push("Shakil");

console.log(myList);

// for remove the last element use pop

myList.pop();

//for adding the array value in the first use unshift

myList.unshift("Faysal");
console.log(myList);

//for removing the first element of array use shift

myList.shift();
console.log(myList);


// overwrite the value of the variable

myList[1] = "Max";
console.log(myList);