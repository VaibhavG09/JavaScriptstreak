let num1 = parseFloat(prompt("Enter a number:"));
let num2 = parseFloat(prompt("Enter another number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)){
    console.log("Invalid Input, Please enter valid numbers.");
} else if (operator === '+') {
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operator === '-') {
    console.log(num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operator === '*') {
    console.log(num1 + " * " + num2 + " = " + (num1 * num2));
} else if (operator === '/') {
    console.log(num1 + " / " + num2 + " = " + (num1 / num2));
} else {
    console.log("Invalid operator");
}
