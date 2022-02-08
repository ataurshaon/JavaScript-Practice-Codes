//While Loop

//Initialization, condition, increment/decrement


//Print 0 to 9
/*
var i = 0;
while(i < 10){
    console.log("Shaon");
    i++
}
*/

// Print 0 to 10
/*
var i = 0;
while(i <=10){
    console.log(i);
    i++;
}
*/

/*
var i = 0;
while(i <= 10){
    if(i == 4){
        console.log("This is Four");
    } 
    console.log(i);
    i++;
}
*/

//Find out odd number by while loop

/*
var i = 0;

while(i <= 10){
    if(i % 2 == 1){
        console.log(i);
    }
    i++;
}
*/

// 1+2+3+4+5+....
var i = 1;
var sum = 0;
product = 1;

while(i <= 10){
    sum = sum + i;
    product = product * i;
    i++;
}

console.log(sum);
console.log(product);