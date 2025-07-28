function performCalculations(operator) {
    let firstNum = parseInt(document.getElementById("num1").value)
    let secNum = parseInt(document.getElementById("num2").value)
    let res;
    switch (operator) {
        case "*":
            res = firstNum * secNum
            break;
        case "/":
            if (secNum == 0) {
                res = "Divide by Zero Cannot be possible"
                break
            }
            else {
                res = firstNum / secNum
                break
            }
        case "%":
            res = firstNum % secNum
            break
        case "+":
            res = firstNum + secNum
            break
        case "-":
            res = firstNum - secNum
            break
        case "++":
            res = ++firstNum
            break
        case "--":
            res = --firstNum
            break
        default: break;
    }
    document.getElementById("res").innerText = `Result:${res}`
}
