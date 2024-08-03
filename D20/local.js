localStorage.setItem('who', 'Cheen tapak dam dam');
let myString= localStorage.getItem('who');
console.log(myString);

// Creating an object
let myObject = { name: 'John', age: 30 };

// Converting the object to a JSON string and saving it to localStorage
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieving, parsing, and logging the object from localStorage
let retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject); // Output: { name: 'John', age: 30 }
