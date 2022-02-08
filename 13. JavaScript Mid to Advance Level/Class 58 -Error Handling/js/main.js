//Error Handling

/*
console.log('Before Error')


try{
    //test(); //error code are here
    //undefined.test(); // it shows type error
}catch(err){ //there are one parameter
 //console.log(err);// it shows reference error
 console.log(err.message); // using message property we will see only test function is not defined
 console.log(err.name) //using name property we can able to see the type of error
}finally{ // by finally method whether it is error or not it will run the code
    console.log('I am inside finally')
}

console.log('After Error')
*/


//throw method --> custom message

let a = 25;

try{
    if(a > 11) throw ('Too Big')
    else if (a < 2) throw ('Too Small')
}catch(err){
    console.log(err);
}




