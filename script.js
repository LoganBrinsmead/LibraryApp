/*
        Author:        Logan Brinsmead
        Date:          December 29th, 2021
        Exercise:      Working with objects by making a simple library app
*/

////// modal box code //////
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
        });
});

overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
                closeModal(modal);
        });
});

closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                closeModal(modal);
        });
});

function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
}

function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookPages').value = 1;
}
////// modal box code //////


// array to store the books
let myLibrary = [];


// constructor for the book objects
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        // function that reports the info on the book when called
        this.info = function () {
                return `${this.title} by ${this.author}, ${this.pages} pages`;
        }
}

// function to create the added book objects
function addBookToLibrary() {

        // get the data that the user inputs into the title
        const title = document.getElementById('bookTitle').value;

        // get the data that the user inputs into the author
        const author = document.getElementById('bookAuthor').value;

        // get the data that the user inputs into the author
        const pages = document.getElementById('bookPages').value;

        // add the book to the library as an object
        const book = new Book(title, author, pages, read);
        myLibrary = [book];
        return myLibrary;
}


// function to display the books on the page
function showBook() {
        addBookToLibrary();
        const bookPage = document.querySelector('.books');
        for (let book in myLibrary) {
                const bookCard = document.createElement('div');
                bookCard.classList.add('bookCard');
                if (myLibrary[book].read==='false') {bookCard.classList.add('notRead')};
                bookCard.textContent = myLibrary[book].info();
                bookPage.appendChild(bookCard);
                
                // button to delete the book
                const deleteBook = document.createElement("BUTTON");
                deleteBook.textContent = 'X';
                bookCard.appendChild(deleteBook);

                // add an event listener to delete the book if the delete button is pressed
                deleteBook.addEventListener('click', () => {
                        bookCard.remove();
                        const index = myLibrary.indexOf(book);
                        myLibrary.splice(index, 1);
                });

                // button to toggle whether the book has been read or not
                const bookToggle = document.createElement("BUTTON");
                bookToggle.textContent = 'Toggle Read Status';
                bookCard.appendChild(bookToggle);
                bookToggle.addEventListener('click', () => {
                        bookCard.classList.toggle('notRead');
                });

        }
}


// bool to store whether or not the user has read the book, true by default
let read = 'true';

const hasBeenRead = document.querySelector('#bookRead');
const hasNotBeenRead = document.querySelector('#bookNotRead');

const bookTitle = document.getElementById('bookTitle');
const bookAuthor= document.getElementById('bookAuthor');

hasBeenRead.addEventListener('click', () => {read = 'true'});
hasNotBeenRead.addEventListener('click', () => {read = 'false'});

// coding the confirm button which calls the function to add/make the book
const confirm = document.querySelector('#confirm');
confirm.addEventListener('click', () => {
        showBook();
        closeModal(modal);      
});


// make sure they input correctly
// function checkValue() {
        // if (bookTitle.value === '' || bookTitle.value === 'Please enter a book title') {
        //         bookTitle.classList.add('error');
        //         bookTitle.value = 'Please enter a book title';
        //         return false;
                
        // } else {
        //         bookTitle.classList.remove('error');
        // }
        // if (bookAuthor.value ==='' || bookAuthor.value === 'Please enter an author.') {
        //         bookAuthor.classList.add('error');
        //         bookAuthor.value = "Please enter an author.";
        //         return false;
        // } else {
        //         bookAuthor.classList.remove('error');
        //         return true;
        // }
// }


// document.querySelectorAll('.textfield').forEach(item => {
//         item.addEventListener('blur', () => {
//                 if (checkValue() === false) {
//                         confirm.disabled='true'
//                 } else if (checkValue() === true) {
//                         confirm.disabled = 'false';
//                 }
//         });
// });







////////////// testing the display //////////////
// const bookPage = document.querySelector('.books');
// const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'has been read');

// const book = document.createElement('div');
// book.classList.add('booktest');
// book.textContent = book1.info();
// bookPage.appendChild(book);

// const deleteBook = document.createElement("BUTTON");
// deleteBook.textContent = 'X';
// book.appendChild(deleteBook);
////////////// testing the display //////////////


