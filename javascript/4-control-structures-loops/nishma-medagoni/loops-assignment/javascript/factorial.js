function factorialOfNumbers() {
    const value = parseInt(document.getElementById('value').value)

    if(isNaN(value) || value < 0) {
        document.getElementById('result').innerText = "Please enter a valid non-negative integer."
        return
    }
    
    let fac = 1 
    let steps = `${value}! =  `
    let i = value

    do {
        if (i > 1) {
            steps = steps + `${i} * `
        }
        else {
            steps = steps + `${i}`
        }
        fac = fac * i 
        i--
    }
    while (i > 0) {
    }

    document.getElementById('result').innerText = `${steps} = ${fac}`;
}