//Call Back Function
//Promises

/*
setTimeout(function(){
    console.log('Hello World');

}, 4000)
*/

/*
let persons = [
    {firstName: 'Ataur', lastName: 'Rahman'},
    {firstName: 'Rahi', lastName: 'Raihan'}
]


function createPerson(person){
    
    
    let prom = new Promise(function(resolve, reject){ //by default promise function has two parameter resolve() & reject() then need to call resolve() function and at last return the object function
        persons.push(person);
        resolve();
    })
    return prom;
}


function getData(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(item){
            output += `<li>${item.firstName} ${item.lastName}</li>`;
        });
        document.getElementById('getPersonsData').innerHTML = output;
    }, 500)
}

createPerson({firstName: 'Moshiur', lastName: 'Rahman'}).then(getData); //here use then function and assign getData() function.. 
*/


//Work for Promises reject function. If any error occured or from server any how not get the data then for showing error this function will work.

let persons = [
    {firstName: 'Ataur', lastName: 'Rahman'},
    {firstName: 'Rahi', lastName: 'Raihan'}
]


function createPerson(person){
    
    
    let prom = new Promise(function(resolve, reject){ //by default promise function has two parameter resolve() & reject() then need to call resolve() function and at last return the object function
        persons.push(person);

        let err = true;
        if(!err){
            resolve();
        }
        else{
            reject('Data Error: Something Wrong!')
        }

        resolve();
    })
    return prom;
}


function getData(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(item){
            output += `<li>${item.firstName} ${item.lastName}</li>`;
        });
        document.getElementById('getPersonsData').innerHTML = output;
    }, 500)
}

createPerson({firstName: 'Moshiur', lastName: 'Rahman'}).then(getData)
.catch(function(err){ //to show error nicely
    console.log(err);
}); //here use then function and assign getData() function.. 