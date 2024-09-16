// Function to perform calculation
function calculate() {
    const operation = prompt("Enter operation (+, -, *, /):");

    if (!['+', '-', '*', '/'].includes(operation)) {
        alert("Invalid operation. Please enter +, -, *, or /.");
        return;
    }

        //Chosen numbers to use

    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

        //error alert

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid number(s). Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {

        //addition

        case '+':
            result = num1 + num2;
            break;

        //Subtraction

        case '-':
            result = num1 - num2;
            break;

        //Multiplication

        case '*':
            result = num1 * num2;
            break;

        //Division

        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
    }

    alert(`The result of ${num1} ${operation} ${num2} is ${result}`);
}

// Call the function when the script is loaded
calculate();
