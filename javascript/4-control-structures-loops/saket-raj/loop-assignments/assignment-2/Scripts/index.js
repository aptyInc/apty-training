const val1 = document.getElementById("number");
let ans = document.getElementById("result");

function generate() {
  let num = Number(val1.value);
  let i = 1;
  let sum = 0;
  while (i <= num) {
    sum += i;
    i++;
  }
  ans.innerText = `Sum of first ${num} numbers is ${sum}`;
}
