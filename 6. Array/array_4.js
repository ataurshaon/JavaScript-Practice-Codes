var list = [
    "January",
    "Fenruary",
    "March",
    "April",
    "May",
    "June"
];

// slice copy from the above array & need to give two value 1 is index number, 2 is the value after the taken element

// var chunk = list.slice(1,4);


// splice cut the element from the array and replace it to the defined array and need to give two value 1 value is the index number and another value is for the element which I want to take.
var chunk = list.splice(2,4);
console.log(list,chunk);