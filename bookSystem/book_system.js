let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = parseInt(document.getElementById('pageNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pageNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pageNumber: pageNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    }
    else {
        alert("Please fill in all fields correctly.");
    }
}

function showBooks() {
    const booksDiv = books.map((book, index) => `<h1> Book Number: ${index + 1} </h1>
        <p><strong>Book Name: </strong> ${book.name} </p>
        <p><strong>Author Name: </strong> ${book.authorName} </p>
        <p><strong>Book Description: </strong> ${book.bookDescription} </p
        <p><strong>No. of Pages: </strong> ${book.pageNumber} pages(s) </p>
        <button onclick="editBook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editBook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pageNumber').value = book.pageNumber;

    // Remove the book from the array
    books.splice(index, 1);
    showBooks(); //refresh the book list
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pageNumber').value = '';
}