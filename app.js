// Data Types
let number = 5;
let string = "zupp";
let boolean = true;

// Arithmetic and Logical Operators
let result = number * 5 + 2;
let isTrue = number > 5 && boolean;

// Conditional Statements
// if else
if (number % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's another day");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Functional Programming
// Determine if a number is odd or even
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}