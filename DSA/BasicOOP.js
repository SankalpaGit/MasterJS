class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    describe(){
        console.log(`${this.title} is written by ${this.author} and have ${this.pages} pages`);
    }
}

class Marvel extends Book {
    constructor(title, author, pages, price, quantity) {
        super(title, author, pages)
        this.price = price;
        this.quantity = quantity;
    }
    details() {
        this.describe()
        console.log(`Rs ${this.price} is price with ${this.quantity} quantity left`)
    }
}

const books= new Marvel('Spider Man', 'Stan Lee', 130, 1200, 18)
books.details()