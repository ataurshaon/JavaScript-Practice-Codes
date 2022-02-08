let dataCon;

// Number to string

dataCon = 888;
//Number to string using function

dataCon = String(888);
dataCon = String(5+5);
dataCon = String(999);
//using method
dataCon = (888).toString();
//find out date by function
 dataCon = String(new Date());
// Boolean to string
dataCon = String(true);

//Array to string
dataCon = String([1, 2, 3, 4]);


//string to number

dataCon = Number("666");
dataCon = Number("Hello World"); // NaN = Not a number but type is number

//string to number using parseInt 

dataCon = parseInt("666");
//for floating number use parseFloat
dataCon = parseFloat("666.6543322");
// for fixed the floating number use toFixed
console.log(dataCon.toFixed(2));

// can not be added one string and one number need to convert the string into number

shaon1 = Number("6");
shaon2 = 6;
dataCon = shaon1 + shaon2;

console.log(dataCon);
console.log(typeof dataCon);
console.log(dataCon.length);

//Boolean value true convert into number (find out true and false value)

// let trueValue = Number(true);
// console.log(trueValue);

