interface Book {
    author: string;
    title: string;
    numberOfPages: number;
    read: boolean;
}

let library: Array<Book> = [
    { author: "Platon", title: "Devlet", numberOfPages: 500, read: false },
];

function getAllBooks(): void {
    const body = document.querySelector("body");
    library.forEach((element) => {
        const { author, title, numberOfPages, read } = element;
        let div = document.querySelector(`#${title}`) || null;
        if (div == null) {
            div = document.createElement("div");
            div.id = title;
            div.className = "book-card unread";

            const titleText = document.createElement("div");
            titleText.className = "title";
            const titleTextContent = document.createTextNode(`Title: ${title}`);
            titleText.appendChild(titleTextContent);
            div.appendChild(titleText);

            const authorText = document.createElement("div");
            authorText.className = "author";
            const authorTextContent = document.createTextNode(
                `Author: ${author}`
            );
            authorText.appendChild(authorTextContent);
            div.appendChild(authorText);

            const pagesText = document.createElement("div");
            pagesText.className = "pages";
            const pagesTextContent = document.createTextNode(
                `Total Pages: ${numberOfPages}`
            );
            pagesText.appendChild(pagesTextContent);
            div.appendChild(pagesText);
            if (read) {
                div.classList.remove("unread");
                div.classList.add("read");
            }
            div.addEventListener("click", () => {
                if (div!.classList.contains("unread")) {
                    div!.classList.replace("unread", "read");
                    element.read = true;
                } else {
                    div!.classList.replace("read", "unread");
                    element.read = false;
                }
            });

            body?.appendChild(div);
        }
    });
}
function newBook() {
    const title = document.getElementById("title") as HTMLInputElement;
    console.log("title found");
    const author = document.getElementById("author") as HTMLInputElement;
    console.log("author found");
    const numberOfPages = document.getElementById(
        "numberOfPages"
    ) as HTMLInputElement;
    console.log("pages found");
    const readStatus = document.getElementById("read") as HTMLInputElement;
    const newBook = {
        title: title.value,
        author: author.value,
        numberOfPages: parseInt(numberOfPages.value),
        read: Boolean(readStatus.value),
    };
    console.log("book created");
    if (!library.some((book) => book["title"] === title.value)) {
        library.push(newBook);
        console.log("book added");
    } else {
        console.log("book already in library");
    }
    console.log(library);
    getAllBooks();
}
function showForm() {
    const form = document.querySelector("form")!;
    form.style.display = "flex";
    const formButton = document.querySelector("#form-button")! as HTMLElement;
    formButton.style.display = "none";
}

function returnButton() {
    const form = document.querySelector("form")!;
    form.style.display = "none";
    const formButton = document.querySelector("#form-button")! as HTMLElement;
    formButton.style.display = "flex";
}

getAllBooks();
