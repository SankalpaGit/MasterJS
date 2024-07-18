//function to check odd and even numbers

function oddevenchecker (nums) {
    if (nums%2==0) {
        console.log(nums,'is even number')
    }
    else{
        console.log(nums,'is odd number')
    }
}
oddevenchecker(23)

//function to find the square of numbers

function squarechecker (nums) {
    square=nums**2
    console.log(square , 'is square of',nums)
}
squarechecker(4)

//write the function to find the max among two numbers

function maxchecker (n1,n2) {
    if (n1>n2) {
        console.log(n1, 'is greater than',n2)
    } else {
        console.log(n1, 'is less than',n2)
    }
}
maxchecker(5,6)


// write the function to concat two strings

function stringconcat(s1, s2) {
    let con = s1.concat(s2);
    console.log(con);
}

stringconcat('H', 'D');

//arrow function to find the sum of two numbers
const summer = (a, b) => a + b;
const a = 1;
const b = 2;
console.log(`The sum of ${a} and ${b} is ${summer(a, b)}`);


//function to return boolean value if the string contains the spefic characters
const containsChar = (str, char) => str.includes(char);

console.log(containsChar('hello', 'e')); // Output: true

//write the function to find the multiplication of two numbers with param but second will be default
function multi(a, b=2) {
    console.log(`the product of ${a} and ${b} is:`,a*b); 
}
multi(4)


//write the function which take two parameters as name and age but age will be default
function greet(name, age = 21) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet("Sankalpa");

/*----------------------------------------------------------------------------------------------------------------------------
                                        HIGH ORDER FUNCTION IN JAVASCRIPT
-----------------------------------------------------------------------------------------------------------------------------*/

/*

A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. 

====================================
How Higher Order Functions Work ?
====================================

So, suppose I want to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

Aren't we write almost same function again and again with slightly different logic? Also, the functions we have written aren't reusable

HOFs is concise and modular in those scenario We only need to write the logic and pass it to function and the function will do the job.

*/



//Higher-order function that takes a function and a number, and calls the function that many times

function repeat(func, time){
    for (var i = 0; i <time; i++) {
        func()
    }
}

repeat(function(){
    console.log('sankalpa')
},3)


function apply(func1, func2, value){
    return func2(func1(value))
}

function first(x){
    return x+2
}

function second(x){
    return x-3
}

var result = apply(first, second,3)
console.log(result)