//Recursion in javascript

/*
    Activity 1: Basic Recursion
*/

//Task 1: Factorial of a Number
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  // Test cases
  console.log(factorial(5)); 


// Task 2: nth Fibonacci Number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  // Test cases
  console.log(fibonacci(5)); 


/*
    Activity 2: Recursion with Arrays
*/

//Task 3: Sum of All Elements in an Array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  // Test cases
  console.log(sumArray([1, 2, 3, 4, 5]));

//Task 4: Maximum Element in an Array
function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    const maxRest = maxArray(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
  }
  
  // Test cases
  console.log(maxArray([1, 5, 3, 9, 2])); 