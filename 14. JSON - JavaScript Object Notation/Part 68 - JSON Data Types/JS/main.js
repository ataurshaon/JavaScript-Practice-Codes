//JSON Data Types

//http://jsonlint.com
//JSON Supported Data Type
//string 
//number
//object (JSON Object)
//array
//boolean
//null

//Json doesn't support date, undefined and function data type

var person = {
    name : "Shaon",
    age : 26,
    homeTown : "Feni",
    date : 1993-05-23, //nt supported data type in JSON
    married : false,
    test_null : null,
    test_undefined : undefined, //not supported data type in JSON
    greet : function(){ //not supported function in JSON
        console.log(`Hello ${this.name}`);
    } 
};

var person_json = JSON.stringify(person);
console.log(person_json);

//Note: We can check the validation of JSON data in jsonlint.com site