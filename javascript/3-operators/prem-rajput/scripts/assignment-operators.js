function add() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    num1 += num2;
    document.getElementById("result").innerText = "Result: " + num1;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    num1 -= num2;
    document.getElementById("result").innerText = "Result: " + num1;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    num1 *= num2;
    document.getElementById("result").innerText = "Result: " + num1;
}

function divide() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    if (num2 === 0) {
        document.getElementById("result").innerText = "Error: Division by zero!";
    } else {
        num1 /= num2;
        document.getElementById("result").innerText = "Result: " + num1;
    }
}

function modulus() {
    var num1 = parseFloat(document.getElementById("value1").value);
    var num2 = parseFloat(document.getElementById("value2").value);
    num1 %= num2;
    document.getElementById("result").innerText = "Result: " + num1;
}

function increment() {
    var num1 = parseFloat(document.getElementById("value1").value);
    num1++;
    document.getElementById("result").innerText = "Result: " + num1;
}

function decrement() {
    var num1 = parseFloat(document.getElementById("value1").value);
    num1--;
    document.getElementById("result").innerText = "Result: " + num1;
}
