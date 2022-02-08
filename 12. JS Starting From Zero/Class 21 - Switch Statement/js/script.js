//Switch Statement

/*
var choice = prompt();
var text;

if(choice == "a"){
    text = "You have chosen option 1";
}else if(choice == "b"){
    text = "You have chosen option 2";
}else if(choice == "c"){
    text = "You have chosen option 3";
}else{
    text = "No option has been selected";
}

console.log(text);
*/


//Switch statement

/*
var choice = prompt();
var text;

switch(choice){
    case "a":
        text = "You have chosen option 1";
        break;
    case "b":
        text = "You have chosen option 2";
        break;
    case "c":
        text = "You have chosen option 3";
        break;
    default: 
        text = "No option is selected";
}

console.log(text);
*/

// Print all days name by switch

/*
switch(1){
    case 1: 
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
    default:
        console.log("No days are selected");
}
*/

// Find out all days by using userinput

var userInput = prompt();
var result;

switch(userInput){
    case "1":
        result = "Sunday";
        break;
    case "2":
        result = "Monday";
        break;
    case "3":
        result = "Tuesday";
        break;
    case "4":
        result = "Wenesday";
        break;
    case "5":
        result = "Thursday";
        break;
    case "6":
        result = "Friday";
        break;
    case "7":
        result = "Saturday";
    default:
        result = "No days are selected";
}

console.log(result);

