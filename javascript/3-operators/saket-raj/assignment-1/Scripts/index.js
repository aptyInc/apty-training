let val1 = document.getElementById("num1");
let val2 = document.getElementById("num2");
let finalAnswer = document.getElementById("answer");

function addition() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  finalAnswer.innerText = `Answer : ${number1 + number2}`;
}

function subtraction() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  finalAnswer.innerText = `Answer : ${number1 - number2}`;
}

function multiplication() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  finalAnswer.innerText = `Answer : ${number1 * number2}`;
}

function division() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  finalAnswer.innerText =
    number2 === 0
      ? "Answer : Cannot divide by zero"
      : `Answer : ${number1 / number2}`;
}

function modulus() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  finalAnswer.innerText = `Answer : ${number1 % number2}`;
}

function increment() {
  let number1 = Number(val1.value);
  number1++;
  val1.value = number1; //this will update the i/p box to show the incremented value
  finalAnswer.innerText = `Answer : ${number1}`;
}

function decrement() {
  let number1 = Number(val1.value);
  number1--;
  val1.value = number1;
  finalAnswer.innerText = `Answer : ${number1}`;
}
