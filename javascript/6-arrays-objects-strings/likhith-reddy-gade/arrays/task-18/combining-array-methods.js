function processNumbers() {
  const numbersInput = document.getElementById("numbers").value;
  const numbers = numbersInput.split(",").map(Number);

  const result = numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((sum, n) => sum + n, 0);

  document.getElementById(
    "combining-methods-result"
  ).innerText = `Resulting Sum: ${result}`;
}
