function processArray() {
  const numbers = document
    .getElementById("numbersInput")
    .value.split(",")
    .map((num) => parseInt(num.trim()));

  // Chain array methods to filter, double, and sum the numbers
  const result = numbers
    .filter((num) => num % 2 === 0) // Filter even numbers
    .map((num) => num * 2) // Double the filtered numbers
    .reduce((sum, num) => sum + num, 0); // Find the sum of the resulting numbers

  document.getElementById(
    "result"
  ).textContent = `Sum of doubled even numbers: ${result}`;
}
