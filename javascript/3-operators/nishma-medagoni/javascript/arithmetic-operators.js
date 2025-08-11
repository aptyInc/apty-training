// for getting the values

function values() {
    const value1 = parseFloat(document.getElementById("value1").value)
    const value2 = parseFloat(document.getElementById("value2").value)
    return { value1, value2}
}


// Operations

function add() {
    const { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 + value2}`
}

function subtract() {
    const { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 - value2}`
}

function multiply() {
    const { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 * value2}`
}

function divide() {
    const { value1, value2 } = values();
    if (value2 === 0) {
        document.getElementById("result").innerText = "Error: Division by zero"
    }
    else {
        document.getElementById("result").innerText = `Result: ${value1 / value2}`
    }
}

function modulus() {
    const { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 % value2}`
}

function increment() {
    const value1 = parseFloat(document.getElementById("value1").value)
    document.getElementById("result").innerText = `Result: ${value1 + 1}`
}

function decrement() {
    const value1 = parseFloat(document.getElementById("value1").value)
    document.getElementById("result").innerText = `Result: ${value1 - 1}`
}

