//DOM Selector (Multiple Elements)

/*
let list = document.getElementsByClassName('sample-class'); //for accessing multiple elements here create array by this
list[0].style.background = 'red'; //accessing by array index number
list[0].style.color = '#ffffff'; 
list[0].style.padding = '30px';
list[0].textContent = 'Hello';


console.log(list[0]);
*/

/*
let list = document.getElementsByTagName('li'); //access the all tag of li by array

list = document.querySelector('ul').getElementsByTagName('li');//access the all tag by query selector of li by array
list[0].style.background = 'orange';
list[0].textContent = 'Ataur Shaon'; //change text
list[0].innerHTML = '<a>Instagram</a>';
list[0].style.color = 'red'; //change ul icon color
//console.log(list[0]);

let lis = Array.from(list); // without this method getElementsByClassName & getElementsByTagName will not execute in forEach loop.

lis.forEach(function(item, i){
    console.log(item, i);
})
*/

//document.querySelectorAll()
//id => #
//class => .

let list = document.querySelectorAll('.sample-class'); //access multiple class
list[0].style.background = 'red'; 
list = document.querySelectorAll('li'); //access all li tag
list = document.querySelectorAll('ol li'); //access all li from ol

list.forEach(function(item){
    //console.log(item);
})

let liOdd = document.querySelectorAll('li:nth-child(odd)'); //accessing odd li
liOdd.forEach(function(item){
    item.style.background = 'red';
    item.style.color = 'white';
});

let liEven = document.querySelectorAll('li:nth-child(even)'); //accessing even li
liEven.forEach(function(item){
    item.style.background = 'gray';
    item.style.color = 'blue';
})

console.log(list);
