const bookList = [];

function addBook(title, author) {
    bookList.push({ title, author, read: false });
}

function displayBooks() {
    const bookListContainer = document.getElementById("book-list");
    bookListContainer.innerHTML = "";

    for (const book of bookList) {
        const bookItem = document.createElement("li");
        bookItem.className = "book-item";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        bookItem.innerHTML = `
            
            <p>${book.title} by ${book.author} 
           <label class="read-status">
              <input type="checkbox"  class="checkbox" data-index="${bookList.indexOf(book)}" ${book.read ? "checked" : ""}>
               Read
            </label>
            \u00d7
           
            </p>
            <hr>

             `
        ;
        bookListContainer.appendChild(bookItem);
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", toggleReadStatus);
    });
}

function toggleReadStatus(e) {
    const index = e.target.getAttribute("data-index");
    bookList[index].read = e.target.checked;
    displayBooks();
}

document.getElementById("book-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");

    const title = titleInput.value;
    const author = authorInput.value;

    if (title === "" || author === "") {
        alert("Please fill the book title and author column.Thank you");
        return;
    }

    addBook(title, author);
    titleInput.value = "";
    authorInput.value = "";
    displayBooks();
});

displayBooks();
