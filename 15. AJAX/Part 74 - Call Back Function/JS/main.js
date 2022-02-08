//Call Back Function


/*
setTimeout(function(){
    console.log('Hello World');

}, 4000)
*/


let persons = [
    {firstName: 'Ataur', lastName: 'Rahman'},
    {firstName: 'Rahi', lastName: 'Raihan'}
]


function createPerson(person, callBack){
    setTimeout(function(){
    persons.push(person);
    callBack();    
    }, 2000)
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

createPerson({firstName: 'Moshiur', lastName: 'Rahman'}, getData);
