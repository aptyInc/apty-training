function FactorialCalc() {
  const number = parseInt(document.getElementById("number").value);

  if (isNaN(number) || number < 0) {
    document.getElementById("result").innerText =
      "Please enter a valid non-negative integer.";
    return;
  }

  let factorial = 1;
  let steps = "";
  let i = number;

  do {
    factorial *= i;
    steps += `${i}! = ${factorial}<br>`;
    i--;
  } while (i > 0);

  document.getElementById("steps").innerHTML = `Steps:<br>${steps}`;

  document.getElementById(
    "result"
  ).innerText = `The factorial of ${number} is ${factorial}.`;
}
