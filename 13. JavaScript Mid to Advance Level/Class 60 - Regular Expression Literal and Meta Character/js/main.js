//Regular Expression
//Pattern Matching Technique
//Literal and Meta Character

//Literal Character

let re;
re = /hello/i;
re = /hell/i;
re = /lo w/i;


//Meta Character

re = /^hello/;// Must start with ^ sign and in string value must start with this value
re = /hello$/;// Must end with $ sign and in string value must end with this value
re = /^hello$/;// start with ^ sign and end with $ sign, in string value must contain only this value
re = /he.lo/;// for . sign in string there must have contain any character or space
re = /h*llo/;//in * position there should have contain a value or not it will match the value and also it will matches if we take many characters in string
re = /he?llo?/; // here, before ? sign same character should be placed in the string value and for multiple checking if one one check is true then it will show matches if multiple checking is false then it will mismatch.
re = /hello?/; //if we use ? sign at the end of the regular expression then if we change the character in string it will matches but for solve this problem we can use \ sign before ? sign and also use ? sign at the end of the string


let str;
str = "hello world";

console.log(re.exec(str));

reTest(re, str)
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' Matches '${re.source}'`);
    }else{
        console.log(`'${str}' Don't Match '${re.source}'`);
    }
} 