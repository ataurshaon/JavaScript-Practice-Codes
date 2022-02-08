//JSON Syntax


//JS Object Format

var student = {
    name : "Shaon",
    age : 25,
    HomeTown : "Feni"
}

/*
//JSON Format

var student_JSON = {
    "name" : "Shaon",
    "age" : 26,
    "HomeTown" : "Feni"
}
*/

//Convert JS Object to JSON

var student_JSON = JSON.stringify(student); //convert JS Object to JSON by stringify method
console.log(student_JSON);


var student_new = JSON.parse(student_JSON); //Convert JSON to JS Object
console.log(student_new);


