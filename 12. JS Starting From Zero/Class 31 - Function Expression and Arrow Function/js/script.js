//Function Expression & Arrow Function

//Normal Function
/*
function saySomething (name){
    console.log("Hello " + name);
}

saySomething("Shaon");
*/

//Function Expression
/*
let saySomething1 = function(name){
    console.log("Hello " + name);
}

saySomething1("Shaon");
*/



//Arrow Function
//In arrow function for one parameter no need to use parenthesis but for multiple parameter there should be use parenthesis


let saySomething2 = (name1, name2) => {
    console.log("Hello " + name1 + name2);
}

saySomething2("Ataur ", "Rahman");