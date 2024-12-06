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

function Equal() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 == value2);
}

function StrictEqual() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 === value2);
}

function NotEqual() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 != value2);
}

function StrictNotEqual() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 !== value2);
}

function GreaterThan() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 > value2);
}

function LessThan() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 < value2);
}

function GreaterThanOrEqual() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 >= value2);
}

function LessThanOrEqual() {
  const { value1, value2 } = getConvertedValues();
  displayResult(value1 <= value2);
}
