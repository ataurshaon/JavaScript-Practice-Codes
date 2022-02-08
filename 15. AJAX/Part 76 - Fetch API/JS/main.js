//Fetch API

document.getElementById('getAPIData').addEventListener('click', APIData);

/*
function APIData(){
    fetch('http://api.icndb.com/jokes/random')
    .then(function(res){ //it works by promise wise
        return res.json(); //response json data. And here it works by text and json() data
    })
    .then(function(data){
        console.log(data); //response data as like as AJAX
    })
    .catch(function(err){ //error data

        console.log(err);
    })
}
*/


//fetch API with Arrow Function

//let test = para1 => res.json();

function APIData(){
    fetch('http://api.icndb.com/jokes/random')

    .then(res => res.json()) //response json data

    .then(data => {console.log(data)}) // 

    .catch(err => {console.log(err)})//error data
}