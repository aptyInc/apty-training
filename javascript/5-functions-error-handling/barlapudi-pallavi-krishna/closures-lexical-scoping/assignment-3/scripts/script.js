const factorial = (function () {
  const cache = {};

  function compute(n) {
    if (n < 0) return "Undefined for negative numbers";
    if (n === 0 || n === 1) return 1;
    if (cache[n]) return cache[n];

    let result = n * compute(n - 1);
    cache[n] = result;
    return result;
  }

  return compute;
})();

function handleCalculate() {
  const num = parseInt(document.getElementById("numberInput").value);

  if (isNaN(num)) {
    document.getElementById("output").textContent = "Please enter a valid number.";
  } else {
    const result = factorial(num);
    document.getElementById("output").textContent = `Factorial of ${num} is: ${result}`;
  }
}
