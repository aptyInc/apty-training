function calculate(operator) {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2").value;
  let result = document.getElementById("result");

  switch (operator) {
    case "+":
      result.textContent = `sum : ${Number(value1.value) + Number(value2)}`;
      break;
    case "-":
      result.textContent = `sub : ${value1.value - value2}`;
      break;
    case "*":
      result.textContent = `mul : ${value1.value * value2}`;
      break;
    case "/":
      result.textContent = `division : ${value1.value / value2}`;
      break;
    case "%":
      result.textContent = `modulus: ${value1.value % value2}`;
      break;
    case "++":
      ++value1.value;

      result.textContent = `increment: ${Number(value1.value) + 1}`;
      break;
    case "--":
      --value1.value;
      result.textContent = `decrement : ${value1.value - 1}`;
      break;
    default:
      result.textContent = `add values`;
  }
}
