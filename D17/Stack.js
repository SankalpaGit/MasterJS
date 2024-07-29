//Task 3: Implement a Stack Class

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) return "Underflow";
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  }


  //Task 4: Reverse a String Using Stack

  function reverseStringUsingStack(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    let reversedString = '';
    while (stack.items.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Test cases
  console.log(reverseStringUsingStack("hello")); 
  