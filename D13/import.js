// import.js
const importer = require('./module');

const sum = importer.add(5, 3);
const difference = importer.subtract(10, 4);
const greeting = importer.greet('Alice');

console.log(`The sum of 5 and 3 is: ${sum}`);
console.log(`The difference between 10 and 4 is: ${difference}`);
console.log(greeting);
