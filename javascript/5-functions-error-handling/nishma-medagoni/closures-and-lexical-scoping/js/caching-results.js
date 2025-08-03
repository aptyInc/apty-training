function factorialWithCaching() {
    const cache = {}

    function factorial(n) {
        if (n <= 1) {
            return 1
        }

        if (cache[n]) {
            return cache[n]
        }

        const result = n * factorial(n-1)
        cache[n] = result 
        return result
    }

    return factorial
}

const cachedFactorial = factorialWithCaching()

function computeFactorial() {
    const number = parseInt(document.getElementById('number').value)

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Please enter a valid non-negative number.'
        return 
    }

    const result = cachedFactorial(number)
    document.getElementById('result').innerText = `Factorial of ${number} is: ${result}`
}