let response = ""
const operators = ['+', '-', '*', '/', '%']
function checkInput(firstNum, secNum, operator) {
    console.log(firstNum, secNum, operator)
    if (typeof (firstNum) != Number || typeof (secNum) != Number) {
        throw new Error('Input field must be Numeric')
    }
    else if (!operators.includes(operator)) {
        throw new Error('Unsupported Operator')
    }
    else {
        switch (operator) {
            case "*":
                response = firstNum * secNum
                break;
            case "/":
                response = firstNum / secNum
                break
            case "%":
                response = firstNum % secNum
                break
            case "+":
                response = firstNum + secNum
                break
            case "-":
                response = firstNum - secNum
                break
            default: break;
        }
    }

}
function check() {
    let firstNum = document.getElementById("num1").value
    let secNum = document.getElementById("num2").value
    let operator = document.getElementById("oprtr").value
    console.log(firstNum, secNum, operator)
    try {
        checkInput(firstNum, secNum, operator)
    }
    catch (error) {
        response = error.message
    }
    console.log(response)
    document.getElementById("res").textContent = `${response}`
}