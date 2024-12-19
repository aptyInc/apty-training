function calculate(operator) {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero";
        }
    }

    document.getElementById("result").innerHTML = "Result: " + result;
    
}
