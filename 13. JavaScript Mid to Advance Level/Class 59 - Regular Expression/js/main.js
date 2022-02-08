//Regular Expression
//Pattern Matching Technique

/*
let re;
re = /hello/; // by / / it is indicates regular expression

re = /Hello/; // now it is match with the string and shows an array because of case sensitivity

re = /hello/i; // now, it will also match with the string because of using i after regular expression, so for removing case sensitivity we can use i after slash sign

console.log(re); //it will show hello with slash sign

console.log(re.source)//by source property it will remove the slash sign in regular expression


let str;
str = 'Hello World';

str = 'Again Hello World'; //now it will match with regular expression in index number 6

str = 'ssdfshellosdfsdfsd';//here, it will also match with regular expression for random string

str = 'Again Hello World and Again Hello World'; // here, it will also match only the first hello and don't count the second one

str = 'World'; //it is not matching so result will be null

let result = re.exec(str); // by exec method it will match with the regular expression and string and it will show an array if match with the string and shows null for not matching

console.log(result);
//console.log(str);
*/



/*
// test() in regular expression

let re;
re = /hello/; // by / / it is indicates regular expression

re = /Hello/; // now it is match with the string and shows an array because of case sensitivity

re = /hello/i; // now, it will also match with the string because of using i after regular expression, so for removing case sensitivity we can use i after slash sign

console.log(re); //it will show hello with slash sign

console.log(re.source)//by source property it will remove the slash sign in regular expression


let str;
str = 'Hello World';
str = 'Again Hello World'; 
str = 'ssdfshellosdfsdfsd';
str = 'Again Hello World and Again Hello World'; 
let result = re.test(str); //test() returns true or false for matching and mismatching

console.log(result);
//console.log(str);
*/


/*

//match() works as like as exec()

let re;
re = /hello/; // by / / it is indicates regular expression

re = /Hello/; // now it is match with the string and shows an array because of case sensitivity

re = /hello/i; // now, it will also match with the string because of using i after regular expression, so for removing case sensitivity we can use i after slash sign

console.log(re); //it will show hello with slash sign

console.log(re.source)//by source property it will remove the slash sign in regular expression


let str;
str = 'Hello World';
str = 'Again Hello World'; 
str = 'ssdfshellosdfsdfsd';
str = 'Again Hello World and Again Hello World'; 
let result = str.match(re); //match() returns an array or null as like as exec() function. But have to change the declaration such as need to use string variable first then in parameter use regular expression variable.

console.log(result);
*/


/*
//search() returns index number or -1 for match and mismatch. variable declaration same as match() that means at first take string variable then in parameter take regular expression variable


let re;
re = /hello/; // by / / it is indicates regular expression

re = /Hello/; // now it is match with the string and shows an array because of case sensitivity

re = /hello/i; // now, it will also match with the string because of using i after regular expression, so for removing case sensitivity we can use i after slash sign

console.log(re); //it will show hello with slash sign

console.log(re.source)//by source property it will remove the slash sign in regular expression


let str;
str = 'Hello World';
str = 'Again Hello World'; 
str = 'ssdfshellosdfsdfsd';
str = 'Again Hello World and Again Hello World'; 
let result = str.search(re); // retruns index number or -1 for match and mismatch

console.log(result);
*/


//replace() we can replace regular expression's matching value by this function

let re;
re = /hello/i; 

console.log(re); //it will show hello with slash sign

console.log(re.source)//by source property it will remove the slash sign in regular expression


let str;
str = 'Hello World';
let result = str.replace(re, 'Hi'); //it will replace the matching value with regular expression. One parameter is regular expression variable and another one is replacing value

console.log(result);

