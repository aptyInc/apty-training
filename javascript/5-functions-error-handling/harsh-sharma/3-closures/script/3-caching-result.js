function createFactorialCache() {
    const cache = {};

    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }

        if (n <= 1) {
            cache[n] = 1;
        } else {
            cache[n] = n * factorial(n - 1);
        }

        return cache[n];
    };
}

const cachedFactorial = createFactorialCache();

function calculateFactorial() {
    const num = parseInt(document.getElementById("numberInput").value);
    if (isNaN(num) || num < 0) {
        alert("Please enter a valid positive integer.");
        return;
    }

    const result = cachedFactorial(num);
    document.querySelector(".output").innerText = `Factorial of ${num} is: ${result}`;
}
