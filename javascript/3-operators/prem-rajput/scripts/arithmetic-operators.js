function add() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerText = "Result: " + sum;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    var difference = num1 - num2;
    document.getElementById("result").innerText = "Result: " + difference;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    var product = num1 * num2;
    document.getElementById("result").innerText = "Result: " + product;
}

function divide() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    if (num2 === 0) {
        document.getElementById("result").innerText = "Error: Division by zero!";
    } else {
        var quotient = num1 / num2;
        document.getElementById("result").innerText = "Result: " + quotient;
    }
}

function modulus() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    var remainder = num1 % num2;
    document.getElementById("result").innerText = "Result: " + remainder;
}

function increment() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var incrementedValue = num1 + 1;
    document.getElementById("result").innerText = "Result: " + incrementedValue;
}

function decrement() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var decrementedValue = num1 - 1;
    document.getElementById("result").innerText = "Result: " + decrementedValue;
}
