// module.js

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to greet a person
  function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Export all functions in a single object
  module.exports = {
    add,
    subtract,
    greet
  };
  