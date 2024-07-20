//Object in javascript
/*================================================================
             Activity 1 : Object creation and access
================================================================*/
const book={
    'title': 'javascript master',
    'author': 'hitesh chaudhary',
    'year':'2024',
}
console.log(book) //printing the book object
console.log('the title of the book ',book.title) //printing the book title
console.log('the book is written by',book.author) //printing the author object

/*================================================================
     Activity 2 and 4 : Object Methods and this keywords
================================================================*/

const books={
    'title': 'javascript master',
    'author': 'hitesh chaudhary',
    'year':'2024',

    getTitleAndAuthor: function () {
        return `${this.title} is written by ${this.author}`
    },

    updateYear: function(newYear) {
        this.year = newYear;
        return this.year;
    }
}

console.log(books.getTitleAndAuthor()) 
console.log('re published on',books.updateYear('2025'));

/*================================================================
             Activity 3 : Nested Object
================================================================*/

const library = {
    name: 'City Library',
    books: [
        {
            title: 'JavaScript Master',
            year: '2024'
        },
        {
            title: 'Python Programming',
            year: '2019'
        },
        {
            title: 'Learning React',
            year: '2020'
        }
    ]
};
console.log(library)

console.log('Library Name:', library.name);

const bookList = library.books;

console.log('====the books in the library====');

bookList.forEach((book) => {
    console.log(book.title);
});

/*================================================================
             Activity 3 : Object Iteration
================================================================*/

console.log('\n')
const booksThings= library.books
for(let i=0; i<booksThings.length; i++) {
    for (let key in booksThings[i]) {
        console.log(key, booksThings[i][key]);
    }
}

console.log('\n')

for (let i=0; i<booksThings.length; i++) {
    let keys=Object.keys(booksThings[i]);
    let values=Object.values(booksThings[i]);
    
   for (let j =0 ; j<values.length; j++) {
    console.log(`${keys[j]}: ${values[j]}`)
   }
}