//Get UI Element

let form = document.querySelector('#book_form');


//Book Class
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI{
    constructor(){

    }
    addToBookList(book){
        let list = document.querySelector('#book_list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        list.appendChild(row);
    };
    clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}




//Add Event Listener

form.addEventListener('submit', addBook)



//Define Event Listener Function

function addBook(e){
    let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

    let book = new Book(title, author, isbn); //create object for Book class
    
    let ui = new UI(); //create object for UI class
    ui.addToBookList(book);

    ui.clearFields();

    e.preventDefault();//remove by default form reloading after click in submit 
}

