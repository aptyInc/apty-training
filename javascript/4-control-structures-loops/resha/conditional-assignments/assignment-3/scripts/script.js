function calculate(op) {
    const output = document.getElementById('output');
    const value1 = Number(document.getElementById('value1').value);
    const value2 = Number(document.getElementById('value2').value);

    let res;

    switch (op) {
        case '+':
            res = value1 + value2;
            break;
        case '-':
            res = value1 - value2;
            break;
        case '*':
            res = value1 * value2;
            break;
        case '/':
            res = value2 === 0 ? "Cannot divide by zero" : value1 / value2 ;
            break;
        case '%':
            res = value1 % value2;
            break;
        case '++':
            res = value1 + 1;
            break;
        case '--':
            res = value1 - 1;
            break;
    }

    output.innerText = "Result is: " + res;
}