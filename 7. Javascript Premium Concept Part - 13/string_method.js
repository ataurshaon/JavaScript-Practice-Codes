let str1 = "First impressing is the best impression.";
let str2 = " We are learning JS from Learn Code.";
let str3 = " We are practising String Method."

//charAt (Finding index number of the character by this method).

console.log(str1.charAt(6));

//charCodeAt (Finding the character code ASCII value)

console.log(str1.charCodeAt(2));

// concat (Adding the value of one string with another)

console.log(str1.concat(str2,str3));

//endswith (Finding the last word of the string and matching whether it is true or false)

console.log(str1.endsWith("impression."));

// includes (5. For finding any value or name from the string or array use includes method and find out the boolean value true or false.)

console.log(str1.includes("best"));

// fromCharCode (Finding the character from the ASCII code)

console.log(String.fromCharCode(114));

// indexOff & lastIndexOff (Find out the index number of the string)

console.log(str1.indexOf("m"));
console.log(str1.lastIndexOf("m"));

// match (finding the string or array value how much used)

console.log(str1.match(/best/g));

//repeat (Use multiple time a string)

console.log(str1.repeat(3));

//replace (for replacing the value in a string)

console.log(str1.replace(/best/g, "good"));

//search (searching for the string value)

console.log(str1.search("best"));

//slice (for slicing value of the string)

console.log(str1.slice(2,5));

//split (For convert string to array)

console.log(str1.split(" "));

// toUpperCase (Uppercase all letter)

console.log(str1.toUpperCase());

//toLowerCase (Lowercase all letters)

console.log(str2.toLowerCase());
