let val1 = document.getElementById("num1");
let val2 = document.getElementById("num2");
let val3 = document.getElementById("num3");
let finalAnswer = document.getElementById("result");

function check() {
  let a = Number(val1.value);
  let b = Number(val2.value);
  let c = Number(val3.value);

  if (a === b && b === c) {
    finalAnswer.innerText = `All numbers are equal (${a})`;
  } else if (a >= b && a >= c) {
    finalAnswer.innerText = `Number-1 (${a}) is largest`;
  } else if (b >= a && b >= c) {
    finalAnswer.innerText = `Number-2 (${b}) is largest`;
  } else {
    finalAnswer.innerText = `Number-3 (${c}) is largest`;
  }
}
