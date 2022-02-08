//DOM Exploring

let val;

val = this; // access whole website
val = window; //access whole website
val = window.document; //access all the document of the website
val = document; //access all the document
val = document.all; // turn into array of the whole website
val = document.all[32]; //accessing by the index number of the whole websites
val = document.all.length; // find out the length of the array of the whole document of the page.
val = document.head; //accessing head tag
val = document.body; //accessing body part of the page
val = document.doctype; //accessing doctype html
val = document.domain; // accessing the domain name of the live server
val = document.URL; //accessing the url of the live server
val = document.characterSet; //accessing the characterset of the page
val = document.contentType; //find out the content type of the page
val = document.forms; //accessing the forms of the page
val = document.forms[0].method; //accessing method of the forms which is for backend
val = document.forms[0].action; //accessing action of the forms which is for backend


val = document.links; //acessing link of the page
val = document.links[0]; //accessing link by index number
val = document.links[0].href; //accessing link by index and href attribute
val = document.links[0].className; //accessing link by classname
val = document.links[0].classList; //find out classlists of the link tag

val = document.images; //find out images of the page

val = document.scripts; //find out script tags of the page
val = document.scripts[0]; //find out script tag
val = document.scripts[0].src; //find out src attribute

val = document.scripts[0].getAttribute('src');


console.log(val);