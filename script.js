const btnSubmitNewBook = document.getElementById("submit-new-book");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");
const booksGrid = document.getElementById("books-grid");
const btnAddBook = document.getElementById('btn-add-book');
const addBookForm = document.getElementById('form-add-book');

let myLibrary = [];

btnSubmitNewBook.addEventListener('click', () => {
    addBookToLibrary();
    displayBooks();
});

btnAddBook.addEventListener('click', () => {
    if (addBookForm.classList.contains('active'))
        addBookForm.classList.remove('active');
    else
        addBookForm.classList.add('active');
    clearForm();

})

function Book(title = "Unknown", author = "Unknown", pages = 0, read = false) {
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
    clearForm();
}

function displayBooks() {

    booksGrid.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        bookCard.classList.add('book-card');

        title.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;

        if (book.read === true)
            read.textContent = "Status: Read";
        else
            read.textContent = "Status: Not Read";

        readBtn.textContent = "Toggle Read";
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener('click', () => {
            removeBook(removeBtn);
        })

        readBtn.addEventListener('click', () => {
            toggleRead(readBtn);
        });

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(removeBtn);
        booksGrid.appendChild(bookCard);

    })
}

function clearForm() {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputRead.checked = false;
}

function toggleRead(readBtn) {

    let bookIndex = Array.from(booksGrid.children).indexOf(readBtn.parentElement);
    
    if (myLibrary[bookIndex].read === true)
        myLibrary[bookIndex].read = false;
    else if (myLibrary[bookIndex].read === false)
        myLibrary[bookIndex].read = true;

    displayBooks();
}

function removeBook(removeBtn) {
    let bookIndex = Array.from(booksGrid.children).indexOf(removeBtn.parentElement);
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}