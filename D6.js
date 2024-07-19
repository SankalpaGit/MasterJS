//Day 6 : Array in the javascript

let arr1= [1,2,3,4,5]
console.log(arr1)

console.log(arr1[0])

console.log(arr1[arr1.length-1])

/*==============================================================
Activity 2: Array Methods (Basic) 
==============================================================*/

arr1.push(6)
console.log('after push method :',arr1)

arr1.pop() //remove the last element if not anything mentioned
console.log('after pop method :',arr1)

arr1.shift() //remove the first element
console.log('after shifting :',arr1)

arr1.unshift(8) //add the value at index 0
console.log('after unsifting array :',arr1)

/*==============================================================
Activity 3: Array Methods (Intermediate)
==============================================================*/

let numbers = [1, 2, 3, 4, 5];

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
function x(num) {
    return num*2
}
let doubled= numbers.map(x)
console.log('after doubling the array value',doubled)

// // Task 8: Use the filter method to create a new array with only even numbers and log the new array.
function y(num) {
    return num % 2 === 0;
};
let evens = numbers.filter(y)
console.log("the even value are:", evens);

// // Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
function z (total, num) {
    return total + num;
};
let sum = numbers.reduce(z)
console.log("Task 9:", sum);

/*==============================================================
Activity 4: Array Iteration
==============================================================*/

let number = [5, 6, 7, 8, 9, 10, 11, 12, 13];

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Task 10:");
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Task 11:");
number.forEach(function(num) {
    console.log(num);
});

/*==============================================================
Activity 5: Multi Dimensional Array
==============================================================*/

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Task 12:", matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
function getElement(matrix, row, col) {
    return matrix[row][col];
}

let element = getElement(matrix, 1, 1); // Accessing the element in the second row and third column
console.log("Task 13:", element);
