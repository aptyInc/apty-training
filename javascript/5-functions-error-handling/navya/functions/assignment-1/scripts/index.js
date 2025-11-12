const output = document.getElementById("output");


function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFib() {
    const limit = Number(document.getElementById("fibInput").value);

    if (isNaN(limit) || limit < 0) {
        output.textContent = "Please enter a non-negative number!";
        return;
    }

    let series = [];

    for (let i = 0; i <= limit; i++) {
        series.push(fibonacci(i));
    }

    output.textContent = `Fibonacci Series: ${series.join(", ")}`;
}
