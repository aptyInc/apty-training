function getValues(operator) {
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);
    let result = document.getElementById("result");

    switch (operator) {
        case '+':
            result.innerText = `Result: ${value1 + value2}`;
            break;
        case '-':
            result.innerText = `Result: ${value1 - value2}`;
            break;
        case '*':
            result.innerText = `Result: ${value1 * value2}`;
            break;
        case '/':
            result.innerText = value2 !== 0 ? `Result: ${value1 / value2}` : "Cannot divide by zero!";
            break;
        case '%':
            result.innerText = `Result: ${value1 % value2}`;
            break;
        case '++':
            result.innerText = `Value1++ : ${value1 + 1}, Value2++ : ${value2 + 1}`;
            break;
        case '--':
            result.innerText = `Value1-- : ${value1 - 1}, Value2-- : ${value2 - 1}`;
            break;
        default:
            result.innerText = "Invalid operation!";
    }
}
function clearCalculator() {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("result").innerHTML = "Result: ";
}
