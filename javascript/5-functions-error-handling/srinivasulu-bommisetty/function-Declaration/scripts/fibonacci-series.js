function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function generateFibonacciUpTo(limit) {
    const series = [];
    let i = 0;
    let fibNumber = fibonacci(i);

    while (fibNumber <= limit) {
        series.push(fibNumber);
        i++;
        fibNumber = fibonacci(i);
    }
    return series;
}

document.getElementById('fibForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const num = parseInt(document.getElementById('num').value);
    
    if (num < 0) {
        document.getElementById('result').textContent = "Please enter a positive number.";
        return;
    }

    const fibSeries = generateFibonacciUpTo(num);
    document.getElementById('result').textContent = "Fibonacci Series up to " + num + ": " + fibSeries.join(', ');
});