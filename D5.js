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

const summer = (a, b) => a + b;
const a = 1;
const b = 2;
console.log(`The sum of ${a} and ${b} is ${summer(a, b)}`);


const containsChar = (str, char) => str.includes(char);

console.log(containsChar('hello', 'e')); // Output: true

