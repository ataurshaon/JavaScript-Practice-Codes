//Regular Expression

let re;
//Postal Code - 4000
re = /^[0-9]{4}$/ //must be start with digit and should have 4 digit and end with digit

//Phone Number 
//01823578649, +8801823578649, 8801823578649

re = /^01[0-9]{9}$/

re = /^\+8801[0-9]{9}$/

re = /^(\+88)?01[0-9]{9}$/ //for using +88 optional use first parenthesis and ? sign

re = /^(\+)?(88)?01[0-9]{9}$/ //for using + sign and 88 optional individually

//Email Address
//shaonn88.learn@gmail.com

re = /^([a-zA-Z0-9]\.?)+([a-zA-Z0-9])+@([a-zA-Z0-9]\.?)+[^\.]$/

re = /^([a-zA-Z0-9])+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/




let str;
str = "4545";
str = "01823578649";
str = "01823578649";
str = "shaonn88.learn@gmail.com";
str = "shaon@gmail.com";



console.log(re.test(str));

reTest(re, str)
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' Matches '${re.source}'`);
    }else{
        console.log(`'${str}' Don't Match '${re.source}'`);
    }
} 