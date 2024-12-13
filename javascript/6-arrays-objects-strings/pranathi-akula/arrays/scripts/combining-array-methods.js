function processanArray() {
  const input = document.getElementById("numbers").value;
  const numbers = input.split(",").map(Number).filter(Boolean);
  const sum = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0);

  document.getElementById(
    "result"
  ).innerHTML = `Sum of doubled even numbers: ${sum}`;
}
