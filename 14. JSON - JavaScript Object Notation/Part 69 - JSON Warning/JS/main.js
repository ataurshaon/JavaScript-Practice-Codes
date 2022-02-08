//JSON - Warning

//JSON.Stringyfy() ---> JS object to JSON string
//JSON.Parse() ---> JSON string to JS Object

//JSON format
var person1 = {
    "name" : "Shaon",
    "age" : 26,
    "homeTown" : "Feni", 
    "married" : false
}
//Note: We can't use JSON by hard coding in JS. Because by default JS take it as object so we caught an error if we want to hard coding JSON string into JS object.

var person_json = JSON.stringify(person1); //convert JS object to JSON though the values are in JSON format it works as object in JS so we can convert it into JSON. Now we can convert it from JSON to JS Object

var person_obj = JSON.parse(person_json); //Convert JSON to JS object

console.log(person_json);

//JS object format
var person1 = {
    name : "Shaon",
    age : 26,
    homeTown : "Feni", 
    married : false
}

console.log(person1); //JS object value shows
