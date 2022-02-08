//Get AJAX Data From External Server icndb.com
//API
//RESTFUL API

document.getElementById('getData').addEventListener('click', loadJokes);

function loadJokes(){

    let number = document.getElementById('numberJokes').value; //this will work for to get the value by input box input number


    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true); //put number variable to get the input value number


    xhr.onprogress = function(){ //this onprogress function shows the loading data to the user and it should be use before onload
        document.getElementById('getAjaxData').innerHTML = '<h2>Loading...</h2>' 
    }


    xhr.onload = function(){
        if(this.status === 200){

            let data = JSON.parse(this.responseText); //convert JSON to object

            let jokes = data.value; //getting data with jokes value

            let output = "<ol>"

            jokes.forEach(function(item){
                output += `<li>${item.joke}</li>`
            })
               
            output += "</ol>"

            document.getElementById('getAjaxData').innerHTML = output; //get jokes data from external server in html page

            //console.log(output);
            //console.log(jokes);
        }
    }
    xhr.send();
}