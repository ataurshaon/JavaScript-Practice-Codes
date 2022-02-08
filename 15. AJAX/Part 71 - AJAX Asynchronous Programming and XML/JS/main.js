//Asychronous Programming
//AJAX - Asynchronous Programming and XML
//Get data without loading the page


/*
document.getElementById('getData').addEventListener('click', loadData);

function loadData(){
   //creat XHR Object (XML HTTP Request)
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'data.txt', true);

   //HTTP Status
   //200 : "OK"
   //403 : "Forbidden"
   //404 : "Not Found"

   xhr.onload = function(){
       if (this.status === 200){
            document.getElementById('getAjaxData').innerHTML = `<h3>${this.responseText}</h3>` 
       }    
   }
   xhr.send(); //without this method of xhr object xhr.onload function will not work
   //console.log(xhr);
}
*/



/*
//Another process of getting AJAX Data from data.txt file

document.getElementById('getData').addEventListener('click', loadData);

function loadData(){
   //creat XHR Object (XML HTTP Request)
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'data.txt', true);

   //HTTP Status
   //200 : "OK"
   //403 : "Forbidden"
   //404 : "Not Found"


   //Ready State
   //0 : request not initialized
   //1 : server connection established
   //2 : request recieved
   //3 : processing request
   //4 : request finished and response is ready


   xhr.onreadystatechange = function(){
       if(this.status === 200 && this.readyState === 4){ 
           document.getElementById('getAjaxData').innerHTML = `<h3>${this.responseText}</h3>`
       }
   }
   xhr.send();
  //console.log(xhr);
}
*/





//For readyState 3 -->processing request. This state is needed for showing the loading state to the user so that user can understand that the page is loading that means it is under request. for this we can use onprogress property


document.getElementById('getData').addEventListener('click', loadData);

function loadData(){
   //creat XHR Object (XML HTTP Request)
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'data.txt', true);

   //HTTP Status
   //200 : "OK"
   //403 : "Forbidden"
   //404 : "Not Found"


   //Ready State
   //0 : request not initialized
   //1 : server connection established
   //2 : request recieved
   //3 : processing request
   //4 : request finished and response is ready


   xhr.onprogress = function(){ //checking on progress of the readState
       console.log(this.readyState); //output should be 3 for indicating on progress ready state
   }
   
   
   xhr.send();
  console.log(xhr);
}