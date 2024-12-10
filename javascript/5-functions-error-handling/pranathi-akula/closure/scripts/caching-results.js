function createFactorialCalculator() {
  const cache = {};

  function factorial(n) {
    if (n <= 1) return 1;
    if (n in cache) {
      console.log(`Fetching from cache for: ${n}`);
      return cache[n];
    }
    console.log(`Calculating for: ${n}`);
    cache[n] = n * factorial(n - 1);
    return cache[n];
  }

  return factorial;
}

const factorial = createFactorialCalculator();

document.getElementById("calculate").addEventListener("click", () => {
  const input = parseInt(document.getElementById("number").value, 10);
  document.getElementById("result").textContent = factorial(input);
});
