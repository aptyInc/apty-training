function calculator(operator) {

    const value1 = parseFloat(document.getElementById('value1').value)
    const value2 = parseFloat(document.getElementById('value2').value)

    if (isNaN(value1) || isNaN(value2)) {
        document.getElementById('result').innerText = 'Result: Please enter valid numbers';
        return;
    }

    switch (operator) {
        case '+':
            document.getElementById('result').innerText = `Result: ${value1 + value2}`
            break
        case '-':
            document.getElementById('result').innerText = `Result: ${value1 - value2}`
            break
        case '*':
            document.getElementById('result').innerText = `Result: ${value1 * value2}`
            break
        case '/':
            let result = value2 !== 0 ? value1 / value2 : 'Division by zero error'
            document.getElementById('result').innerText = `Result: ${result}`
            break
        case '%':
            document.getElementById('result').innerText = `Result: ${value1 % value2}`
            break
        case '++':
            document.getElementById('result').innerText = `Result: ${value1 + 1}`
            break
        case '--':
            document.getElementById('result').innerText = `Result: ${value1 - 1}`
            break
        default:
            document.getElementById('result').innerText = `Result: Please Enter a Valid Operator`
    }
}