function mulTable() {
    let number = document.getElementById('number').value;

    if (number === '') {
        document.getElementById('result').textContent = 'Please enter a number.';
        return;
    }

    number = parseInt(number);

    let result = '';

    for (let i = 1; i <= 10; i++) {
        result += `${number} * ${i} = ${number * i}<br>`;
    }

    // Display the result
    document.getElementById('result').innerHTML = result;
}
