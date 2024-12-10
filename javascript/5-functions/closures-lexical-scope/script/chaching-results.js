function factorialCalculator() {
    const cache = {}; 

    function factorial(n) {
        if (n < 0) {
            return "Factorial is not defined for negative numbers.";
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        if (cache[n]) {
            console.log(`Cache hit for ${n}`);
            return cache[n];
        }
        console.log(`Computing factorial for ${n}`);
        cache[n] = n * factorial(n - 1);
        return cache[n];
    }

    return factorial;
}

const calculateFactorial = factorialCalculator();

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const number = parseInt(document.getElementById("number1").value, 10);
    const result = calculateFactorial(number);

    document.getElementById("result").innerText = `Factorial of ${number}: ${result}`;
});
