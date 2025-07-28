function performCalculations(operator) {
    let firstNum = parseInt(document.getElementById("num1").value)
    let secNum = parseInt(document.getElementById("num2").value)
    switch (operator) {
        case "*=":
            firstNum = firstNum * secNum
            document.getElementById("num1").value = firstNum
            break;
        case "/=":
            if (secNum == 0) {
                res = "Divide by Zero Cannot be possible"
                break
            }
            else {
                firstNum = firstNum / secNum
                document.getElementById("num1").value = firstNum
                break
            }

        case "%=":
            firstNum = firstNum % secNum
            document.getElementById("num1").value = firstNum
            break
        case "+=":
            firstNum = firstNum + secNum
            document.getElementById("num1").value = firstNum
            break
        case "-=":
            firstNum = firstNum - secNum
            document.getElementById("num1").value = firstNum
            break
        case "++":
            firstNum = ++firstNum
            document.getElementById("num1").value = firstNum
            break
        case "--":
            firstNum = --firstNum
            document.getElementById("num1").value = firstNum
            break
        default: break;
    }
    document.getElementById("res").innerText = `Result:${firstNum}`
}
