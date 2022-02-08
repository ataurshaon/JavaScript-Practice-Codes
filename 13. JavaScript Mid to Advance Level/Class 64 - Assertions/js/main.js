//Regular Expression
// Assertions

let re;
re = /x(?=y)/ // here, for y there should have x before y for matching this condition of assertions
re = /x(?=yz)/ //here, yz together and x should have before yz for matching with string
re = /x(?!=y)/ //for this condition matching with string there should have x then other character then y should exist then it will match


let str;
str = "wererxy";
str = "wererxyz";
str = "wererxty";



console.log(re.exec(str));

reTest(re, str)
function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' Matches '${re.source}'`);
    }else{
        console.log(`'${str}' Don't Match '${re.source}'`);
    }
} 