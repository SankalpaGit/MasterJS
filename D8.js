//ES6 features

const person ={
    name: 'Sankalpa',
    age: 18
};
console.log(`he is ${person.name} with the ${person.age}`);

const reasult=`
Name: ${person.name}
Age: ${person.age}
`
console.log(reasult);

/* ================= Array and object Destructuring =================*/

const numsArray= [1,2,3,4,5,6,7,8,9,10];

const [firstElement,...rest]= numsArray; 
const lastElement = rest[rest.length-1];
console.log(firstElement,'and',lastElement);

books={
    names: 'javascript',
    author : 'Sankalpa',
}
const {names, author}=books
console.log(`The title of the book is ${names} and written by ${author}`)

/* ================= Spread and Rest Operators =================*/

const numsArray2 =[11,12,13,14,15]
const combined = [...numsArray,...numsArray2]
console.log(combined)


function summer(...args) {
    sum =0
    const stored= [...args]
    for (let i=0; i<args.length; i++){
        sum+= stored[i]
    }
    console.log('The sum of the number are :',sum)

}
summer(1,2,3,4,5)

/* ================= Default Parameters =============================*/

function prod(x,y=1){
    console.log(x*y)
}

prod(3)
prod(3,3)

/*===================== Enhanced Object Literals===========================*/

const movie = {
    names: 'Avengers',
    release: '2020',
    budget: '200 M',

    display() {
        console.log(`The name of the movie is ${this.names}, released on ${this.release}, with a budget of ${this.budget}`);
    }
};

movie.display();
console.log(movie)



// Variable that will be used as a property name
const Biggest = 'large';

// Define the object with a computed property name
const Asia = {
    [Biggest]: 'Russia ',
    Smallest: 'Maldives'
};

// Log the object to the console
console.log(Asia);
console.log(Asia.large)