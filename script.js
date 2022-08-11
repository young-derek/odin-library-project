const btnSubmitNewBook = document.getElementById("submit-new-book");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");

let myLibrary = [
    // { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 350, read: true },
    // { title: "The Intelligent Investor", author: "Benjamin Graham", pages: 400, read: false }
];

btnSubmitNewBook.addEventListener('click', () => {
    addBookToLibrary()
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

    let newBook = new Book(
        inputTitle.value,
        inputAuthor.value,
        inputPages.value,
        inputRead.checked
    )
    myLibrary.push(newBook);
}

