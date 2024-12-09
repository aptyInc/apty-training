function table() {
    const value = parseFloat(document.getElementById('value').value)

    if (isNaN(value) || value <= 0) {
        document.getElementById('result').innerText = "Please enter a valid positive number.";
        return;
    }

    let output = ""
    for (let i = 1; i <= 10; i++) {
        let result = (value * i)
        output += `${value} * ${i} = ${result}<br>`
    }
    document.getElementById('result').innerHTML = output
}