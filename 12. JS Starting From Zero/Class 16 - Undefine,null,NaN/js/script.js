//Undefine, null, NaN

//undefine
var a;
console.log(typeof a); //undefine value
console.log(a == undefined);
console.log(a === undefined);

//null
var a = null;
console.log(typeof a); // null value
console.log(a == null);
console.log(null == undefined); //Boolean value true
console.log(null === undefined); // null & undefined not a same type value

//empty string
var b = "";
console.log(typeof b); 
console.log(b);
console.log(a == b);
console.log(a === b);


//NaN

var c = 10 / "h";
console.log(c);
console.log(NaN == null);
console.log(NaN == b);
console.log(NaN == undefined);