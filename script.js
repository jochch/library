//BOOK CLASS
class Book {
    constructor(
        title = "unknown",
        author = "unknown",
        pages = "0",
        isRead = "false"
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

//BOOKS ARRAY 
let myLibrary = [];

function addToLibrary(newBook) {
    if (myLibrary.some((book) => 
    book.title === newBook.title)) return false; //why false here??
    myLibrary.push(newBook);
    SVGPathSegLinetoVerticalRel();
    return true;
}

function removeFromLibrary(bookTitle) {
    myLibrary = myLibrary.filter((book) => book.title !== bookTitle); //dont understand this line
    saveLocal();
}

function getBook(bookTitle) {
    for (let book of myLibrary) {
        if (book.title === bookTitle) {
            return book;
        }
    }
    return null;
}

//POPUP
const newBookButton = document.querySelector(".new-book-button");
const popup = document.querySelector(".popup");
const overLay = document.querySelector(".overlay");

newBookButton.addEventListener("click", openPopup);
overLay.addEventListener("click", closePopup);

function openPopup() {
    form.reset();
    popup.classList.add("popup--active");
    overLay.classList.add("overlay--active");
}

//FORM
const form = document.querySelector("popup-form");
form.addEventListener("submit", addBook);

function addBook(e) {
    e.
}