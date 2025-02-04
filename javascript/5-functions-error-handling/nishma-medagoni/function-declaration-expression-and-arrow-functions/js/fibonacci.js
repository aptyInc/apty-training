function fibonacci(n) {
    if (n <= 1) {
        return n 
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

function calculateFibonacci() {
    const number = parseInt(document.getElementById('number').value)

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Please enter a valid positive number.'
        return
    }

    let result = []

    for (let i = 0; i <= number; i++) {
        result.push(fibonacci(i))
    }

    document.getElementById('result').innerText = `${number}: ${result.join(', ')}`
}