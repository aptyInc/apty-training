function getConvertedValues() {
    const value1Input = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2Input = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    const value1 = convertToType(value1Input, type1);
    const value2 = convertToType(value2Input, type2);

    return { value1, value2 };
  }

  function convertToType(value, type) {
    switch (type) {
      case "number":
        return parseFloat(value);
      case "boolean":
        return value.toLowerCase() === "true";
      case "string":
      default:
        return value;
    }
  }

  function displayResult(result) {
    document.getElementById("result").textContent = `Result: ${result}`;
  }

  function logicalAnd() {
    const { value1, value2 } = getConvertedValues();
    displayResult(value1 && value2);
  }

  function logicalOr() {
    const { value1, value2 } = getConvertedValues();
    displayResult(value1 || value2);
  }

  function logicalNot() {
    const { value1 } = getConvertedValues();
    displayResult(!value1);
  }