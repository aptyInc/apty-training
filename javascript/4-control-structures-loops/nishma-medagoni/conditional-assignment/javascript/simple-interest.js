function calculate() {
    const principle = parseFloat(document.getElementById('principle').value)
    const time = parseFloat(document.getElementById('time').value)
    const rate = parseFloat(document.getElementById('rate').value)

    if (isNaN(principle) || isNaN(rate) || isNaN(time) || (principle <= 0) || (rate <= 0) || (time <= 0)) {
        document.getElementById('result').innerText = 'Please Enter Valid Positive Numbers'
        return 
    }

    let SI = (principle * time * rate) / 100

    document.getElementById('result').innerText = `Result: ${SI}`
}