function createFactorialCalculator() {
    const cache = {};

    function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n <= 1) {
            return 1;
        }
        cache[n] = n * factorial(n - 1); // Calculate and store in cache
        return cache[n];
    }

    return factorial;
}

const factorialCalculator = createFactorialCalculator();
function calculateFactorial() {
    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('result').textContent = "Enter Valid Number!";
        return;
    }
    const result = factorialCalculator(number);
    document.getElementById('result').textContent = `Factorial of ${number} is: ${result}`;
}