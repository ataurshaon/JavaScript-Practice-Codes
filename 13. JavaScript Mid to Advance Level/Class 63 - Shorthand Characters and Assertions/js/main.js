//Regular Expression
//Shorhand Characters and Assertions

let re;
re = /\w/; //Word character can define by this and also matches with Alpha numberic or _ . It is matches by index number of the string value only for first one.
re = /\w+/; //word character matches with multiple value
re = /\W/; //non word character that means only matching with non word characters for only one match
re = /\W+/; //non word character for multiple value matchign in string value
re = /\d/;//only digit will match with the string
re = /\d+/;// get mulitple matching number
re = /\D/;//non number character
re = /\s/; //only white space.. it is match in the space of a string value
re = /\bHello\b/;//word boundary..only space can given for this word nothing can be added in string for matching


let str;
str = "+01823578649";//the matching will start from index number 1 because it is start from the number and + sign is taken by word character
str = "(&*^klkjlk";//It will take only one matches
str = "(&*^klkkjkjk";//word character matches with multiple value
str = "(&*kk"; //matching with non word character 
str = "sdfs*(^*sdfdf*df"; //matching with non word multiple 
str = "3424sdsf";//matching with digit
str = "adfsfsd4545fd";//matching with multiple digits
str = "3434"; //non digit number
str = " Hello "; //works in whitespace



console.log(re.exec(str));

reTest(re, str)
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' Matches '${re.source}'`);
    }else{
        console.log(`'${str}' Don't Match '${re.source}'`);
    }
} 