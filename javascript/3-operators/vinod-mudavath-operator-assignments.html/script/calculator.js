function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let operation = document.getElementById("operation").value;
        let result;

        if (operation === "+") {
            result = num1;
            result = result + num2;
        } else if (operation === "-") {
            result = num1;
            result = result - num2;
        } else if (operation === "*") {
            result = num1;
            result = result * num2;
        } else if (operation === "/") {
            if (num2 !== 0) {
                result = num1;
                result = result / num2;
            } else {
                result = "Error: Division by zero!";
            }
        } else {
            result = "Invalid Operation!";
        }

        document.getElementById("result").innerText = "Result: " + result;
    }