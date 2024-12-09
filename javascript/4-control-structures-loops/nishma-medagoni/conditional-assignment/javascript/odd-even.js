function check() {
    const value = parseFloat(document.getElementById('value').value)

    if (isNaN(value)) {
        document.getElementById('result').innerText = "Result: Please Enter a Valid Number"
        return
    }

    if (value % 2 === 0) {
        document.getElementById('result').innerText = "Result: Value is Even Number"
    }
    else {
        document.getElementById('result').innerText = "Result: Value is Odd Number"
    }

}