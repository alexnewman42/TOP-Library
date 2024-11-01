function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}.`);
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')

console.log(theHobbit.info());
