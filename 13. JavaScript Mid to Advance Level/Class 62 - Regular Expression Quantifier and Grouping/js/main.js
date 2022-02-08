//Regular Expression
//Quantifier and Grouping

let re;
re = /h[eai]llo/; //should have contain one character in string value in this Regular Expression 
re = /[HA]ello/i; //should have contain one or multiple character in string value for matching
re = /[^ha]ello/; //if this square value exist in string position then it will mismatch and if not exist then it will match.
re = /^[he]ello/; //if this square value exist in string position then it will match otherwise mismatch
re = /[a-z]ello/;//start with small letter and string value also should be start with small letter
re = /[A-Z]ello/;//start with capital letter and string value also should be start with capital letter
re = /[A-j]ello/i; //remove case sensitivity now the string value can be any letter
re = /^[a-z]ello/;//string value must be start with small letter
re = /^[A-Z]ello/;//string value must be start with capital letter
re = /[A-Za-z]ello/;//small and capital letter are together and any character can be match
re = /[0-9]ello/; 
re = /^[0-9]/;//must be start with number
re = /[^0-9]hello/;//for matching can't use 0-9 value in string
re = /^[0-9][0-9][0-9]hello/; //must start with three digit for matching



//Braces {} - Quantifier

re = /sha{3}on/; //By curley braces we can define quantifier value assign for how much character we need to match
re = /hel{2,5}o/; //here we can take quantifier value 2 times or 5 times together
re = /hel{2,}o/;//start from 2 and take as much as I can in the string value



//Parenthesis () ------ Grouping

re = /^([0-9]){5}/ //here, should be start with 5 number value in string

//Bangladeshi Phone Number Matching

re = /^01([0-9]){9}$/ //here must number must be start with 01 and then must have 9 number and end it by assigning $ sign. That means no number can be used after 9 number by indication $ sign

re = /^\+8801([0-9]){9}$/ //here, we are using internation number pattern where need to use +880 after ^ sign using + sign can't be use it will show uncaught error so we need to use \ sign for using + sign and others conditions are done as before

re = /^([0-9]x){3}/ //here, must start with the number and then should have x for 3 times



let str;
str = "+8801823578649";
str = "2x3x4x"

console.log(re.exec(str));

reTest(re, str)
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' Matches '${re.source}'`);
    }else{
        console.log(`'${str}' Don't Match '${re.source}'`);
    }
} 