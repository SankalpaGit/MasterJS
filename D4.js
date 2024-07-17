//loops in the javascript

// WTP to print the numbers from 1 to 10

// for (var i = 1; i <=10; i ++) {
//     console.log(i)
// }   


//WTP to print the multiplication of 5
// for (var i = 5; i <= 50; i +=5) {
//     console.log(i)
// }

//While loops in the javascript

//WTP to print the sum of the numbers from 1 to 10

// let i=1;
// let sum=0;

// while (i <= 10){
//     sum+=i;
//     i++;
// }
// console.log(sum)

//WTP to prin the number from 10 to 1 using the while loop

// let x = 10;

// while (x >= 1) {
//     console.log(x);
//     x--;
// }

//WTP to print the number from 1 to 5 using do while

// let nums=1

// do {
//     console.log(nums)
//     nums++;
// } while (nums<=5);

//WTP to calculate the factorial of the number using do while

let number = 5; // Change this value to calculate the factorial of a different number
let result = 1;
let i = number;

do {
    result *= i;
    i--;
} while (i > 0);

console.log(`Factorial of ${number} is ${result}`);



let a = 1;
let stars = '';

do {
    stars += '*';
    console.log(stars);
    a++;
} while (a <= 5);


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the current iteration when i is 5
    }
    if (i === 7) {
        break; // Exit the loop when i is 7
    }
    console.log(i);
}
