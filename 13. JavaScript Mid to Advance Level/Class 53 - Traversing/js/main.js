//Traversing

let val;

let list = document.querySelector('ul'); //accessing ul tag
let listItem = document.querySelector('ul li:last-child');
val = list;
val = listItem;

//Get childnodes

val = list;
val = list.childNodes; //accessing all childnodes of ul tag and get the value by array, here in array we will also get text array for enter key of all ul li tag
val = list.childNodes[0]; //accessing the array by index number in ul li
val = list.childNodes[1];
val = list.childNodes[3];

val = list.childNodes[0].nodeName; //accessing nodename of the array
val = list.childNodes[1].nodeType;


//Below are output of nodeType of childNodes
// 1 Element
// 2 Attribute
// 3 Text
// 8 Comment
// 9 Document Itself
// 10 Doctype


val = list;
val = list.children; //accessing ul child tag without text array of above childNodes
val = list.children[0]; //accessing the child tag by index number
val = list.children[0].textContent = 'Hello World'; //change the text of 0 index child tag
val = list.children[1].children[0]; //accessing childrens of children
val = list.children[1].children[0].href; //accessing attribute

val = list.firstChild; //accesing first child of the array with text array
val = list.firstElementChild; //accesing first child without text array
val = list.lastChild; //accesing last child of the array with text array
val = list.lastElementChild; //accessing last child of the array without text array

val = list.childElementCount; //count the child element of ul

val = listItem;
val = listItem.parentElement; //accessing parent node of the child node
val = listItem.parentNode; //accessing parent node of the child node
val = listItem.parentNode.parentNode; //access parent node of parent node


let listItem2 = document.querySelector('ul li:first-child');
val = listItem2;

val = listItem2.nextSibling; //accessing the next sibling of the first child with text array
val = listItem2.nextElementSibling; //accessing the next sibling of the fist child without text array
val = listItem2.nextSibling.nextSibling; //accessing the next sibling of next sibling of first child with text array
val = listItem2.nextElementSibling.nextElementSibling; //accessing the next sibling element of next sibling element of first child without text array 

val = document.querySelector('ul li:last-child');

val = val.previousSibling; //access previous sibling of last child with text array
val = val.previousElementSibling; //access previous sibling of last child without text array
val = val.previousElementSibling.previousElementSibling; //accessing previous of previous element sibling

console.log(val);