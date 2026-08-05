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
console.log(myLibrary) // console.log() to check working



const container = document.querySelector(".container")

function displayBooks() {
    container.innerHTML = ''

    myLibrary.forEach((item) => {
        const new_item = document.createElement('div')
        new_item.classList.add('item')

        new_item.textContent = `${item.title}, ${item.author} with ${item.pages} pages`
        container.appendChild(new_item)


        const delete_btn = document.createElement('button')
        delete_btn.textContent = "Remove"
        new_item.appendChild(delete_btn)

        new_item.dataset.id = item.id


        delete_btn.addEventListener("click", () => {
            const index = myLibrary.findIndex(book => book.id === item.id)
            myLibrary.splice(index, 1)
            displayBooks()
        })
    })
}

displayBooks()




const add = document.querySelector(".add_book")
const dialog = document.querySelector("#bookDialog")
const close = document.querySelector("#closeBtn")

add.addEventListener("click", () => {
    dialog.showModal()
})

close.addEventListener("click", () => {
    dialog.close()
    form.reset()
})



const form = document.querySelector("#bookForm")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    
    const title = document.querySelector("#book_title").value
    const author = document.querySelector("#book_author").value
    const pages = document.querySelector("#book_pages").value
    
    addBookToLibrary(title, author, pages)
    displayBooks()
    form.reset()
    dialog.close() 
})

