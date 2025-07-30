const val1 = document.getElementById("principal");
const val2 = document.getElementById("rate");
const val3 = document.getElementById("time");
const res = document.getElementById("result");

function calculateSimpleInterest() {
  const num1 = Number(val1.value);
  const num2 = Number(val2.value);
  const num3 = Number(val3.value);

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    res.innerText = `Invalid input`;
  }

  res.innerText = `Simple Interest : Rs ${(num1 * num2 * num3) / 100}`;
}
