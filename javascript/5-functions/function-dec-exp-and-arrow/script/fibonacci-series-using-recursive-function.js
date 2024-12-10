

function generateFibonacciSeries(n) {
    if (n <= 1) return n;
    return generateFibonacciSeries(n - 1) + generateFibonacciSeries(n - 2);
}

function displayFibonacci() {
    const numberInput = document.getElementById('number1').value;
    const num = parseInt(numberInput);

    if (isNaN(num) || num < 0) {
        document.getElementById('result').innerText = "Please enter a non-negative integer.";
        return;
    }

    let fibo = ``
    for (let i = 0; i <= num; i++) {
        fibo += generateFibonacciSeries(i) + " ";
    }

    document.getElementById('result').innerText = `Fibonacci series up to ${num}: ${fibo}`;
}








