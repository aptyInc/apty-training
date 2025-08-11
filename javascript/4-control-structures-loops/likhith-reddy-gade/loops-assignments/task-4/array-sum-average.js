function calculateArray() {
  const input = document.getElementById("array").value;
  const numbers = input.split(",").map(Number);
  let sum = 0;

  for (const num of numbers) {
    sum += num;
  }

  const average = sum / numbers.length;
  document.getElementById(
    "result"
  ).textContent = `Sum: ${sum}, Average: ${average.toFixed(2)}`;
}
