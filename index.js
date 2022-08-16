var library = [
    { author: "Platon", title: "Devlet", numberOfPages: 500, read: false },
];
function getAllBooks() {
    var body = document.querySelector("body");
    library.forEach(function (element) {
        var author = element.author, title = element.title, numberOfPages = element.numberOfPages, read = element.read;
        var div = document.querySelector("#".concat(title)) || null;
        if (div == null) {
            div = document.createElement("div");
            div.id = title;
            div.className = "book-card unread";
            var titleText = document.createElement("div");
            titleText.className = "title";
            var titleTextContent = document.createTextNode("Title: ".concat(title));
            titleText.appendChild(titleTextContent);
            div.appendChild(titleText);
            var authorText = document.createElement("div");
            authorText.className = "author";
            var authorTextContent = document.createTextNode("Author: ".concat(author));
            authorText.appendChild(authorTextContent);
            div.appendChild(authorText);
            var pagesText = document.createElement("div");
            pagesText.className = "pages";
            var pagesTextContent = document.createTextNode("Total Pages: ".concat(numberOfPages));
            pagesText.appendChild(pagesTextContent);
            div.appendChild(pagesText);
            if (read) {
                div.classList.remove("unread");
                div.classList.add("read");
            }
            div.addEventListener("click", function () {
                if (div.classList.contains("unread")) {
                    div.classList.replace("unread", "read");
                    element.read = true;
                }
                else {
                    div.classList.replace("read", "unread");
                    element.read = false;
                }
            });
            body === null || body === void 0 ? void 0 : body.appendChild(div);
        }
    });
}
function newBook() {
    var title = document.getElementById("title");
    console.log("title found");
    var author = document.getElementById("author");
    console.log("author found");
    var numberOfPages = document.getElementById("numberOfPages");
    console.log("pages found");
    var readStatus = document.getElementById("read");
    var newBook = {
        title: title.value,
        author: author.value,
        numberOfPages: parseInt(numberOfPages.value),
        read: Boolean(readStatus.value)
    };
    console.log("book created");
    if (!library.some(function (book) { return book["title"] === title.value; })) {
        library.push(newBook);
        console.log("book added");
    }
    else {
        console.log("book already in library");
    }
    console.log(library);
    getAllBooks();
}
function showForm() {
    var form = document.querySelector("form");
    form.style.display = "flex";
    var formButton = document.querySelector("#form-button");
    formButton.style.display = "none";
}
function returnButton() {
    var form = document.querySelector("form");
    form.style.display = "none";
    var formButton = document.querySelector("#form-button");
    formButton.style.display = "flex";
}
getAllBooks();
