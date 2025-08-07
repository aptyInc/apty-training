function processArray() {
  const input = document.getElementById("array").value;
  const result = document.getElementById("result");

  const arr = input.split(",").map(Number);

  const sum = arr
    .filter((num) => num % 2 === 0) // even nums
    .map((num) => num * 2) // double them
    .reduce((acc, curr) => acc + curr, 0); // sum

  result.innerText = `Sum of doubled even numbers: ${sum}`;
}
