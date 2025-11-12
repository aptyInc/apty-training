const resultBox = document.getElementById("output");


function createFactorial() {
    const cache = {};

    function factorial(n) {
        if (n < 0) return "Invalid input";

        if (n === 0 || n === 1) return 1;


        if (cache[n]) {
            console.log("From cache:", n);
            return cache[n];
        }


        const value = n * factorial(n - 1);
        cache[n] = value;

        return value;
    }

    return factorial;
}


const memoFactorial = createFactorial();

function calculate() {
    const num = Number(document.getElementById("numInput").value);

    if (isNaN(num) || num < 0) {
        resultBox.textContent = "Please enter a non-negative number!";
        return;
    }

    const result = memoFactorial(num);

    resultBox.textContent = `Factorial of ${num} is ${result}`;
}
