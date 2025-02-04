function createFactorialCalculator() {
  const cache = {};

  function factorial(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n === 0 || n === 1) {
      return 1;
    }
    cache[n] = n * factorial(n - 1);
    return cache[n];
  }

  return factorial;
}

const factorialCalculator = createFactorialCalculator();

document
  .getElementById("factorialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const number = parseInt(document.getElementById("number").value);

    const result = factorialCalculator(number);

    document.getElementById(
      "result"
    ).textContent = `Factorial of ${number} is ${result}`;
  });
