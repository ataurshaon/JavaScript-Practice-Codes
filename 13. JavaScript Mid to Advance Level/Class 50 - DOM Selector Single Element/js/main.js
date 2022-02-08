//DOM selector (Single Element)

/*
let val;

//Getting an element
val = document.getElementById("document-title"); 
val = document.getElementById("document-title").id; //accessing ID name by DOM
val = document.getElementById("document-title").className; //accessing class name by DOM 
*/
 
//Changing style

document.getElementById("document-title").style.background = "red"; //changing background color of this ID document
document.getElementById("document-title").style.color = "#ffffff"; //changing font color
document.getElementById('document-title').style.padding = '20px'; // padding 
document.getElementById('document-title').style.fontSize = '60px' // fontsize 
document.getElementById('document-title').style.display = 'none'; //display hide
document.getElementById('document-title').style.display = 'block' //display block or show 
document.getElementById('document-title').style.marginTop = '60px';


//Changing content

document.getElementById('document-title').textContent = 'This is textcontent'; //changing textcontent
document.getElementById('document-title').innerText = 'Hello world'; // changing textcontent
document.getElementById('document-title').innerHTML = '<i>Hello World</i>'; // changing to italic
document.getElementById('document-title').innerHTML = '<a href = "http://www.google.com">Hello World</a>'; // link tag


//document get element by variable

let val = document.getElementById('document-title');

val.style.background = 'green'; //change background color by DOM variable
val.innerText = 'My name is Shaon'; //changing textcontent
val.style.color = 'red'; //changing color 

//console.log(val);

//document.querySelector

let myStyle;

myStyle = document.querySelector('#document-title'); //id declare by #

myStyle.style.background = 'red';
myStyle.style.color = '#ffffff';
myStyle.style.padding = '40px';


//getting HTML tag by query selector

myStyle = document.querySelector('h3');
myStyle.style.background = '#dddddd';

myStyle = document.querySelector('ol'); //access ordered list in html
myStyle = document.querySelector('ol li'); // only access first li element of ordered list
myStyle = document.querySelector('li:last-Child'); //accessing last li
myStyle = document.querySelector('li:nth-child(2)'); //accessing nth li

myStyle = document.querySelector('#myList'); //access ol list by id
myStyle = document.querySelector('#myList li'); //only access first li element of ordered list
myStyle.style.background = 'blue'; // background color in first li
myStyle.style.innerText = 'Rubi'; //change text in first li

myStyle = document.getElementById('listStyle');
myStyle.style.color = 'red';

myStyle = document.querySelector('.document'); //accessing class by query selector
myStyle.style.background = 'orange'; //changing background color by accessing class
myStyle.style.fontSize = '50px'; //changing fontSize


console.log(myStyle);


