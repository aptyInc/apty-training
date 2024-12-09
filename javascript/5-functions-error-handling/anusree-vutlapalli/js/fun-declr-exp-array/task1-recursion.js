function fibonacci(n) {
    if (n <= 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

function showFibonacci() {
    const numInput = document.getElementById("num").value; 
    const n = parseInt(numInput); 

    if (isNaN(n) || n < 0) {
        document.getElementById("result").textContent = "Please enter a valid positive number.";
        return;
    }

    let series = ""; 
    for (let i = 0; i <= n; i++) {
        series += fibonacci(i); 
        if (i < n) {
            series += ", "; 
        }
    }

    document.getElementById("result").textContent = `Fibonacci series up to ${n}:\n${series}`;
}
