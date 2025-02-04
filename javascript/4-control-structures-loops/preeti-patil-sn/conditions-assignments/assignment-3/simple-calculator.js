function calculate(operator) {
    const input1 = parseFloat(document.getElementById("input1Field").value);
    const input2 = parseFloat(document.getElementById("input2Field").value);

    let result;
    switch (operator) {
      case '+':
        result = input1 + input2;
        break;
      case '-':
        result = input1 - input2;
        break;
      case '*':
        result = input1 * input2;
        break;
      case '/':
        result = input2 !== 0 ? input1 / input2 : 'Error (div by 0)';
        break;
      case '%':
        result = input1 % input2;
        break;
      case '++':
        result = input1 + 1;
        document.getElementById("input1Field").value = result;
        break;
      case '--':
        result = input1 - 1;
        document.getElementById("input1Field").value = result;
        break;
      default:
        result = 'Invalid Operation';
    }
    document.getElementById("result").textContent = `Result: ${result}`;
  }

  function clearValues() {
    document.getElementById("input1Field").value = '';
    document.getElementById("input2Field").value = '';
    document.getElementById("result").textContent = '';
  }

