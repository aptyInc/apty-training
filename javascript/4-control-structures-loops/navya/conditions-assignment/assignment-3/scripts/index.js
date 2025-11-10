const resultBox = document.getElementById("resultBox");

function fetchInputs() {
    const aVal = parseFloat(document.getElementById("numA").value);
    const bVal = parseFloat(document.getElementById("numB").value);

    if (isNaN(aVal) || isNaN(bVal)) {
        resultBox.textContent = "Error: Enter valid numbers.";
        return null;
    }

    return [aVal, bVal];
}

function compute(op) {
    const nums = fetchInputs();
    if (!nums) return;

    let [x, y] = nums;

    switch (op) {
        case "+":
            resultBox.textContent = `Answer: ${x + y}`;
            break;

        case "-":
            resultBox.textContent = `Answer: ${x - y}`;
            break;

        case "*":
            resultBox.textContent = `Answer: ${x * y}`;
            break;

        case "/":
            if (y === 0) {
                resultBox.textContent = "Cannot divide by zero.";
            } else {
                resultBox.textContent = `Answer: ${x / y}`;
            }
            break;

        case "%":
            if (y === 0) {
                resultBox.textContent = "Cannot take modulo by zero.";
            } else {
                resultBox.textContent = `Answer: ${x % y}`;
            }
            break;

        case "++A":
            resultBox.textContent = `Answer: ${++x}`;
            break;

        case "++B":
            resultBox.textContent = `Answer: ${++y}`;
            break;

        case "--A":
            resultBox.textContent = `Answer: ${--x}`;
            break;

        case "--B":
            resultBox.textContent = `Answer: ${--y}`;
            break;
    }
}
