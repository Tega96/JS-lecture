/**
 * Create a calculator function that takes two nunbers 
 * and an operator(+, -, *, /) and returns the results of 
 * the operation. 
 * Handle division by zero by returning "Cannot divide by zero"
 */

function calculator(num1, num2, operator) {
    // Your code here
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '/') {
        if (num1 === 0 || num2 === 0 ){
            return'Cannot be divided by zero'
        } else {
            return num1 / num2
        }
    } else if (operator === '*') {
        return num1 * num2
    }
}
console.log(calculator(83470, 845, "+"))

// Test cases
console.log(calculator(10, 5, '+'))
console.log(calculator(10, 5, '-'))
console.log(calculator(10, 5, '/'))
console.log(calculator(10, 5, '*'))
console.log(calculator(10, 0, '/'))