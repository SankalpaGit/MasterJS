//Day 3 control structure in javascript

//if else

const a=0
if (a==0){
    console.log("the value of a is 0")
}
const B=10
if (B>0){
    console.log(B, 'is positive number')
}
else{
    console.log(B, 'is negetive number')
}


//Nested if else
// using the nested if else to find the greates niumber amon the 3 value

const f= 10
const s= 20
const t= 30

if (f>s){
    console.log(f, 'is the grestest')
}
else{
    if(s>t){
        console.log(s, 'is the grestest')
    }
    else{
        console.log(t, 'is  the grestest')
    }
}

//program to check the odd or even numbers

function oddeven(num){
        if (num%2==0){
            console.log(num, 'is the even number')
        }
        else{
            console.log(num, 'is the odd number')
        }
}
oddeven(10)


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

isLeapYear(407); // 2024 is a leap year.

//write the program using the switch case which show the days of the week on the basis of number
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    console.log(dayName);
}

getDayName(1); 


//write the program to find the grade on the basis of the marks using the switch statement
function getGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }
    console.log(grade);
}

getGrade(95); 
