//Promises

//If promises successful --> resolve()
//If promises failed --> reject()

/*
let prom = new Promise((resolve, reject) => {
    let a = 1+1;

    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed')
    }
});

//.then .catch

prom.then((message)=>{
    console.log('I am from then' + message);
}).catch((message) => {
    console.log('I am from catch' + message);
})


console.log('I am from after promise'); // this output will also show because the promise is not stop the others code the codes run asynchronously
*/


//When promise uses
//image download from server


let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 1+1;

    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed')
    }
    },4000);
    
});

//.then .catch

prom.then((message)=>{
    console.log('I am from then ' + message);
}).catch((message) => {
    console.log('I am from catch ' + message);
})


console.log('I am from after promise'); //here, it will work asynchronously it will not wait for promises