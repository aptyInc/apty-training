let val1 = document.getElementById("num1");
let val2 = document.getElementById("num2");
let finalAnswer = document.getElementById("answer");

function addition() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  number1 += number2;
  finalAnswer.innerText = `Answer : ${number1}`;
}

function subtraction() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  number1 -= number2;
  finalAnswer.innerText = `Answer : ${number1}`;
}

function multiplication() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  number1 *= number2;
  finalAnswer.innerText = `Answer : ${number1}`;
}

function division() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  if (number2 === 0) {
    finalAnswer.innerText = "Answer : Cannot divide by zero";
  } else {
    number1 /= number2;
    finalAnswer.innerText = `Answer : ${number1}`;
  }
}

function modulus() {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  number1 %= number2;
  finalAnswer.innerText = `Answer : ${number1}`;
}

function increment() {
  let number1 = Number(val1.value);
  number1++;
  val1.value = number1;
  finalAnswer.innerText = `Answer : ${number1}`;
}

function decrement() {
  let number1 = Number(val1.value);
  number1--;
  val1.value = number1;
  finalAnswer.innerText = `Answer : ${number1}`;
}
