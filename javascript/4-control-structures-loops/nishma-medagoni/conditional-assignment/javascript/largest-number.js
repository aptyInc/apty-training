function check() {
    const value1 = parseFloat(document.getElementById('value1').value)
    const value2 = parseFloat(document.getElementById('value2').value)
    const value3 = parseFloat(document.getElementById('value3').value)

    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
        document.getElementById('result').innerText = 'Result: Please enter valid numbers';
        return;
    }

    if (value1 >= value2 && value1 >= value3) {
        document.getElementById('result').innerText = `Result: ${value1} is the Largest`;
    } else if (value2 >= value1 && value2 >= value3) {
        document.getElementById('result').innerText = `Result: ${value2} is the Largest`;
    } else {
        document.getElementById('result').innerText = `Result: ${value3} is the Largest`;
    }
}