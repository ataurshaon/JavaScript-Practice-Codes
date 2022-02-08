//Regular Expression
//Character Set Using Brackets []

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



let str;
str = "885hello";

console.log(re.exec(str));

reTest(re, str)
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' Matches '${re.source}'`);
    }else{
        console.log(`'${str}' Don't Match '${re.source}'`);
    }
} 