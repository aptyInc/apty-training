function check() {
    const input_year = document.getElementById('year').value

    if ((input_year % 4 === 0 && input_year% 100 !== 0) || (input_year % 400 === 0)) {
        document.getElementById('result').innerText = 'Result: Leap Year'
    }
    else {
        document.getElementById('result').innerText = 'Result: Not a Leap Year'
    }

}