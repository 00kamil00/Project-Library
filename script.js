const myLibrary = []



function Book(title, author, pages) {
    // the constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.id = generateId()
}



function addBookToLibrary(book_title, book_author, book_pages) {
    // take params, create a book then store it in the array
    let book = new Book(book_title, book_author, book_pages)
    myLibrary.push(book)
}



function generateId() {
    // unique id generator
    let uuid = self.crypto.randomUUID()
    return uuid
}


addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 319)
addBookToLibrary("Harry Potter", "J.K. Rowling", 328)
console.log(myLibrary)