const val1 = document.getElementById("number");
let ans = document.getElementById("result");

function factorial() {
  let num = Number(val1.value);
  let i = 1;
  let fact = 1;
  do {
    fact = fact * i;
    i++;
  } while (i <= num);
  ans.innerText = `Factorial of ${num} is ${fact}`;
}
