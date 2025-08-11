

function addOperator() {
    let result = 0;
    const [num1, num2] = getVlaues();
    result += num1;
    result += num2;
    document.getElementById('result').textContent = result;
}


function subtractOperator() {
    let result = 0;
    const [num1, num2] = getVlaues();
    result += num1;
    result -= num2;
    document.getElementById('result').textContent = result;

}

function multiplyOperator() {
    let result = 0;
    const [num1, num2] = getVlaues();
    result += num1;
    result *= num2;
    document.getElementById('result').textContent = result;

}

function divideOperator() {
    let result = 0;
    const [num1, num2] = getVlaues();
    if (num2 !== 0) {
        result += num1;
        result /= num2;
    } else {
        alert('Division by zero is not allowed!');
        return;
    }
    document.getElementById('result').textContent = result;

}

function modulloOperator() {
    let result = 0;
    const [num1, num2] = getVlaues();
    result += num1;
    result %= num2;
    document.getElementById('result').textContent = result;
}

function incrementOperator() {
    let result = 0;
    const [num1] = getVlaues();
    result = num1;
    result++;
    document.getElementById('result').textContent = result;

}

function decrementOperator() {
    let result = 0;
    const [num1] = getVlaues();
    result = num1;
    result--;
    document.getElementById('result').textContent = result;

}


function getVlaues() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    return [num1, num2];
}

