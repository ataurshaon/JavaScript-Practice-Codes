//String Data Type

var str = "SomeThing"; // String Literal
console.log(str);
var str2 = String("SomeThing"); //String Constructor
console.log(str2);

//Convert Number to String

var n = 20;
var str = n + ""; //one way
var str = String(n); // another way
console.log(str);


//Escape Notation

var str = "This is a 'String'"; // Can't use "" quotation in "" quotation string
var str = 'This is a "String"'; // Can't use '' quotation in '' quotation string
var str = "This is a \"String\""; // if want to use same quotation then should use \ slash.
var str = 'This is a \'String\''; // if want to use same quotation then should use \ slash.
var str = "This is a \nString"; // for new line use \n
var str = "This is a \tString"; // for tab space use \t.
var str = "This is a \\\\String\\\\"; // for using \\ in string.
console.log(str);


//String Method 
//Concat

var a = "I am";
var b = "Shaon ";
var x = 30;
var c = a.concat(" ", b, "Age is ", x);
console.log(c);


//Substring; start from index 0
//for which value inserted into substr method parameter from that index number of string it will start from print.

var a = "I am Shaon";
var b = a.substr(5);
console.log(b);
console.log(a.charAt(2)); // for find out the character position in a string

// To find out starting letter or words use startsWith mehtod
var x = "I am John";
console.log(x.startsWith("I am"));

// To find out ends letter or words use endsWith method.
var x = "A Brown Fox Jumps";
console.log(x.endsWith("hudai"));


// To Uppercase all letter
var x = "a Quick Brown Fox Jumps";
var y = x.toUpperCase();
console.log(y);

// To LowerCase all letter
var x = " a Quick Brown Fox Jumps";
var y = x.toLowerCase();
console.log(y);

//For removing unwanted space use trim method.
var x = "       My Name is Shoan        ";
console.log(x.trim());


//String to Array

var x = "A Quick Brown Fox Jumps";
console.log(x.split("")); //convert into array by individual letter.
console.log(x.split(" ")) //convert into array by word by giving space in quotatoin.