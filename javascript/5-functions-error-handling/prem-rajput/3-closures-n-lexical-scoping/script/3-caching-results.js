function createFactorialCache() {
    const cache = {};

    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }

        if (n === 0 || n === 1) {
            cache[n] = 1;
        } else {
            cache[n] = n * factorial(n - 1);
        }

        return cache[n];
    };
}

const factorialWithCache = createFactorialCache();

function calculateFactorial() {
    const number = parseInt(document.getElementById("numberInput").value);
    if (isNaN(number) || number < 0) {
        document.getElementById("result").innerText = "Please enter a valid non-negative number.";
        return;
    }

    const result = factorialWithCache(number);
    document.getElementById("result").innerText = `Factorial of ${number} is: ${result}`;
}
