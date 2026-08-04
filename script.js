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



const container = document.querySelector(".container")

function displayBooks() {
    container.innerHTML = ''

    myLibrary.forEach((item) => {
        const new_item = document.createElement('div')
        new_item.classList.add('item')

        new_item.textContent = `${item.title}, ${item.author} with ${item.pages} pages`
        container.appendChild(new_item)
    })
}

displayBooks()