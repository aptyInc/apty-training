function calculate(operator) {
    let firstNum = parseInt(document.getElementById("num1").value)
    let secNum = parseInt(document.getElementById("num2").value)
    let res;
    if (operator == '*') {
        res = firstNum * secNum
    }
    else if (operator == '/') {
        if (secNum == 0) {
            res = "Divide by Zero is not possible"
        }
        else {
            res = firstNum / secNum
        }
    }
    else if (operator == '+') {
        res = firstNum + secNum
    }
    else if (operator == '-') {
        res = firstNum - secNum
    }
    else if (operator == '%') {
        res = firstNum % secNum
    }
    else if (operator == '++') {
        res = ++firstNum
    }
    else {
        res = --firstNum
    }
    document.getElementById("res").innerText = `Result:${res}`

}