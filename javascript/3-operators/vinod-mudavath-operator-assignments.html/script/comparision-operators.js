function convertValue(value, type) {

  console.log(Object(value))
    if (type === "number") return Number(value);
    if (type === "boolean") return value.toLowerCase() === "true";
    if(type === "object") return Object(value);
    if(type === "undefined") return undefined;
    if(type === "null") return null;
    return String(value);
  }

  function compareEqual() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 == val2}`;
  }

  function compareStrictEqual() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 === val2}`;
  }

  function compareNotEqual() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 != val2}`;
  }

  function compareStrictNotEqual() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 !== val2}`;
  }

  function compareGreater() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 > val2}`;
  }

  function compareLesser() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 < val2}`;
  }

  function compareGreaterOrEqual() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 >= val2}`;
  }

  function compareLesserOrEqual() {
    const [val1, val2] = getConvertedValues();
    document.getElementById('result').textContent = `Result: ${val1 <= val2}`;
  }

  function getConvertedValues() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;

    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    return [convertedValue1, convertedValue2];
  }