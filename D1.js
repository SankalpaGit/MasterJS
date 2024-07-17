//asssignment to the variable

var nums= 1
let str='hello world'
const bool= false

console.log(nums)
console.log(str)
console.log(bool)


const a={
    name: 'sahil',
    address: 'nepal',
    gmail: 'sahil@gmail.com',
}

const ar=[1,2,3,4,5,6,7,8]

console.log(typeof(a))
console.log(typeof(ar))


const number=20
let numpy= 10

console.log('before changes',number)
console.log('before changes',numpy)

numpy=100
console.log('after changes',numpy)


//consoling the changes in the variable with const throw an error

//we have to handle the error
try {
    number = 50;  // This will cause a TypeError because 'number' is a constant
    console.log('After changes:', number);
} catch (error) {
    console.log('Error:', error.message);  // Log the error message 'assignmenr to the constant variable'
}
