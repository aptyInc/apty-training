function calculateFactorial() {
  const number = parseInt(document.getElementById("number").value);
  let result = 1;
  let i = 1;

  do {
    result *= i;
    i++;
  } while (i <= number);

  document.getElementById("result").textContent = `Factorial: ${result}`;
}
