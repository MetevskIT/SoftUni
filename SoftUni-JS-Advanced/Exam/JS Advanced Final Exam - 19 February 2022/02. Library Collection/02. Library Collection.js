class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }

    payBook(bookName) {
        let currentBook = this.books.find(x => x.bookName == bookName);
        if (!currentBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (currentBook.payed == true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        currentBook.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let currentBook = this.books.find(x => x.bookName == bookName);
        if (!currentBook) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if (currentBook.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books = this.books.filter(x => x.bookName != bookName);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {

        if (bookAuthor != undefined) {
            let currentBook = this.books.find(x => x.bookAuthor == bookAuthor);
            if (!currentBook) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            let res = (currentBook.payed == false) ? 'Not Paid.' : 'Has Paid.'

            return `${currentBook.bookName} == ${currentBook.bookAuthor} - ${res}`
        } else {
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            let result = '';
            result += `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
            this.books.forEach(x => {
                let res = (x.payed == false) ? 'Not Paid.' : 'Has Paid.'
                result += `${x.bookName} == ${x.bookAuthor} - ${res}\n`

            });
            return result.trimEnd();
        }
    }

}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


