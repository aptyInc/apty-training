const factorial = (() => {
  const cache = {};

  return (num) => {
    if (num in cache) {
      return `Cached Result: ${cache[num]}`;
    }

    const calculateFactorial = (n) =>
      n <= 1 ? 1 : n * calculateFactorial(n - 1);
    const result = calculateFactorial(num);
    cache[num] = result;
    return `Calculated Result: ${result}`;
  };
})();

document
  .getElementById("factorial-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const number = parseInt(document.getElementById("number").value, 10);
    if (isNaN(number) || number < 0) {
      document.getElementById("factorial-output").textContent =
        "Please enter a valid non-negative number.";
      return;
    }

    const result = factorial(number);
    document.getElementById("factorial-output").textContent = result;
  });
