let val1 = document.getElementById("num1");
let val2 = document.getElementById("num2");
let finalAnswer = document.getElementById("answer");

function calculate(operator) {
  let number1 = Number(val1.value);
  let number2 = Number(val2.value);
  switch (operator) {
    case "+":
      finalAnswer.innerText = `${number1 + number2}`;
      break;
    case "-":
      finalAnswer.innerText = `${number1 - number2}`;
      break;
    case "*":
      finalAnswer.innerText = `${number1 * number2}`;
      break;
    case "/":
      finalAnswer.innerText = `${number1 / number2}`;
      break;
    case "%":
      finalAnswer.innerText =
        number2 === 0 ? "Cannot divide by zero" : `${number1 % number2}`;
      break;
    case "++":
      number1++;
      val1.value = number1;
      finalAnswer.innerText = `${number1}`;
      break;
    case "--":
      number1--;
      val1.value = number1;
      finalAnswer.innerText = `${number1}`;
      break;
    default:
      finalAnswer.innerText = "Invalid";
  }
}
