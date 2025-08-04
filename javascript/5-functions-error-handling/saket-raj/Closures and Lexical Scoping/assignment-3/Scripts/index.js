const factorial = (function () {
  const cache = {};

  return function calc(n) {
    if (n < 0) return "Invalid input";
    if (n === 0 || n === 1) return 1;
    if (cache[n]) return cache[n];

    cache[n] = n * calc(n - 1);
    return cache[n];
  };
})();

function handleFactorial() {
  const num = document.getElementById("num").value;
  const n = Number(num);
  const result = factorial(n);

  document.getElementById(
    "output"
  ).innerText = `Factorial of ${n} is ${result}`;
}
