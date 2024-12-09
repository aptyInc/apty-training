function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function generateFibonacciSeries(limit) {
    const series = [];
    for (let i = 0; i <= limit; i++) {
      series.push(fibonacci(i));
    }
    return series;
  }
  
  document.getElementById("fibonacciForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const number = parseInt(document.getElementById("number").value, 10);
    if (isNaN(number) || number < 0) {
      document.getElementById("results").textContent = "Please enter a valid non-negative number.";
      return;
    }
  
    const series = generateFibonacciSeries(number);
  

    document.getElementById("results").textContent = `Fibonacci series up to ${number}: ${series.join(", ")}`;
  });
  