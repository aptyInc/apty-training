function calculateSum() {
  const number = parseInt(document.getElementById("number").value);
  let sum = 0;
  let i = 1;

  while (i <= number) {
    sum += i;
    i++;
  }

  document.getElementById("result").textContent = `Sum: ${sum}`;
}
