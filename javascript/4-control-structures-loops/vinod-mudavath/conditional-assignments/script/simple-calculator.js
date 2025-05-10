
function calculate(operator) {

    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let result = document.getElementById("result");

    switch (operator) {
        case '+': result.innerText = `Result : ${num1 + num2}`; break;
        case '-': result.innerText = `Result : ${num1 - num2}`; break;
        case '*': result.innerText = `Result : ${num1 * num2}`; break;
        case '/': result.innerText = (num2 === 0) ? `Result : ${alert('Number2 not be zero')}` : `Result : ${num1 / num2}`; break;
        case '%': result.innerText = `Result : ${num1 % num2}`; break;
        case '--': result.innerText = `Result : ${--num1}`; break;
        case '++': result.innerText = `Result : ${++num1}`; break;
        default: result.innerText = `Result : Invalid operator`;
    }
}