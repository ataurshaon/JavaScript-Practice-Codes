//Add Replace and Remove Element

//createElement()

let olItem = document.createElement('li'); //create new element
olItem.className = 'myClass shaon'; //create class
olItem.id = 'myId'; //create ID


//Add attribute

olItem.setAttribute('title', 'this is title');

//Add content

olItem.appendChild(document.createTextNode('React')); //create text node 

document.querySelector('ol').appendChild(olItem); //Add extra element in ol tag

//console.log(olItem);


//Add new li element in ul tag

let ulItem = document.createElement('li'); //create element li tag
let link = document.createElement('a'); //create element a tag

link.appendChild(document.createTextNode('Instagram')); //create text node in a tag
link.setAttribute('href', 'http://www.instagram.com'); //create href attribute in a tag

ulItem.appendChild(link); //add a tag into li tag

document.querySelector('ul').appendChild(ulItem); //add new li tag into ul tag
//console.log(ulItem);
//console.log(link);



//Replace Element

let newHeading = document.createElement('h1'); //create new element h1
newHeading.appendChild(document.createTextNode('This is Heading one')); //create new text node
newHeading.className = 'simple-class'; //create new class for h1

let oldHeading = document.querySelector('h3'); // select old element h3

let parentDiv = document.querySelector('.container'); //select the parent element class

parentDiv.replaceChild(newHeading, oldHeading); //replace in parent element by two parameter

//console.log(newHeading);
//console.log(oldHeading);
//console.log(parentDiv);



//Remove Element

let listItem = document.querySelectorAll('li'); //multiple element selector
listItem[1].remove(); //remove element by array index number

//console.log(listItem);


let ulList = document.querySelector('ul');
let ulListItem = document.querySelectorAll('li');

ulList.removeChild(ulListItem[7]);
ulList.classList.add('test');
ulList.classList.add('new-class');
ulList.classList.remove('sample-class');
ulList.setAttribute('title', 'this is my title')


console.log(ulList);

//let check = ulList.hasAttribute('title');
//console.log(check);