// Regular Expression In JavaScript

// let var1task1= "javascript is good for development"
// let var2task1= /javascript/g;

// console.log(var1task1.match(var2task1));


//Task 2: Write a regular expression to match all digits in a string. Log the matches.

let task2str= "My Phone Number is 980000000"
let task2Regx= /\d/g;

console.log(task2str.match(task2Regx));

//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

let task3String = "JavaScript is Awesome. Programming is Fun.";
let task3Regex = /\b[A-Z][a-z]*\b/g;
console.log(task3String.match(task3Regex)); // Output: ['JavaScript', 'Awesome', 'Programming', 'Fun']


//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

let task4String = "There are 123 apples and 45 oranges.";
let task4Regex = /\d+/g;
console.log(task4String.match(task4Regex)); // Output: ['123', '45']


//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format 

let task5String = "My phone number is (123) 456-7890.";
let task5Regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let task5Match = task5String.match(task5Regex);
console.log(task5Match); // Output: ['(123) 456-7890', '123', '456', '7890']


//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

let task6String = "My email is example@example.com.";
let task6Regex = /(\w+)@(\w+\.\w+)/;
let task6Match = task6String.match(task6Regex);
console.log(task6Match); // Output: ['example@example.com', 'example', 'example.com']


//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

let task7String = "JavaScript is awesome.";
let task7Regex = /^\w+/;
console.log(task7String.match(task7Regex)); // Output: ['JavaScript']


//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

let task8String = "I love programming in JavaScript";
let task8Regex = /\w+$/;
console.log(task8String.match(task8Regex)); // Output: ['JavaScript']


//Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

let task9Password = "Passw0rd!";
let task9Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
console.log(task9Regex.test(task9Password)); // Output: true
