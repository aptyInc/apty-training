document.getElementById("fibonacciForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const number = parseInt(document.getElementById("number").value);
  const result = fibonacci(number);
  document.getElementById("result").textContent = result.join(", ");
});

function fibonacci(n) {
  if (n <= 1) return [0, 1].slice(0, n + 1);
  const fib = fibonacci(n - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib;
}
