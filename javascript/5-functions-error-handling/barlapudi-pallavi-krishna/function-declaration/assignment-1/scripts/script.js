function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
document.getElementById("fibonacciBtn").addEventListener("click", function (event) {
    event.preventDefault();

    const num = parseInt(document.getElementById("number").value);
    if(isNaN(num)){
      document.getElementById("result").innerText="Please enter a valid number";
      return;
    }
    let series = [];

    for (let i = 0; i <= num; i++) {
      series.push(fibonacci(i));
    }

    document.getElementById("result").innerText =
      "Fibonacci series: " + series.join(", ");
  });
