function convertValue(value, type)
 {switch (type) {
    case "number":
      return Number(value);
    case "boolean":
      return value.toLowerCase() === "true";
    default:
      return value; 
}
}
 

function getInputValues() {
  const value1 = document.getElementById("value1").value;
  const type1 = document.getElementById("type1").value;
  const value2 = document.getElementById("value2").value;
  const type2 = document.getElementById("type2").value;
  const value3 = document.getElementById("value3").value;
  const type3 = document.getElementById("type3").value;
  const value4 = document.getElementById("value4").value;
  const type4 = document.getElementById("type4").value;

  const convertedValue1 = convertValue(value1, type1);
  const convertedValue2 = convertValue(value2, type2);
  const convertedValue3 = convertValue(value3, type3);
  const convertedValue4 = convertValue(value4, type4);

  return { convertedValue1, convertedValue2, convertedValue3, convertedValue4 };
}


function displayResult(result) {
  document.getElementById("result").innerText = `Result: ${result}`;
}


function compareEqual() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 == convertedValue2 && convertedValue3 == convertedValue4;
  displayResult(result);
}

function compareStrictEqual() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 === convertedValue2 && convertedValue3 === convertedValue4;
  displayResult(result);
}

function compareNotEqual() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 != convertedValue2 || convertedValue3 != convertedValue4;
  displayResult(result);
}

function compareStrictNotEqual() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 !== convertedValue2 || convertedValue3 !== convertedValue4;
  displayResult(result);
}

function compareGreaterThan() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 > convertedValue2 && convertedValue3 > convertedValue4;
  displayResult(result);
}

function compareLessThan() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 < convertedValue2 && convertedValue3 < convertedValue4;
  displayResult(result);
}

function compareGreaterThanOrEqual() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 >= convertedValue2 && convertedValue3 >= convertedValue4;
  displayResult(result);
}

function compareLessThanOrEqual() {
  const { convertedValue1, convertedValue2, convertedValue3, convertedValue4 } =
    getInputValues();
  const result =
    convertedValue1 <= convertedValue2 && convertedValue3 <= convertedValue4;
  displayResult(result);
}
