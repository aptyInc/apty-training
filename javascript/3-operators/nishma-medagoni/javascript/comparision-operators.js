function convertedValues() {
    const value1 = document.getElementById("value1").value;
    const type1 = document.getElementById("type1").value;
    const value2 = document.getElementById("value2").value;
    const type2 = document.getElementById("type2").value;
  
    const convertedValue1 = convertType(value1, type1);
    const convertedValue2 = convertType(value2, type2);
  
    return { convertedValue1, convertedValue2 };
}

// convert values

function convertType(value, type) {
    let return_value
    if (type === "number") {
        return_value = Number(value)
    }
    else if (type === "boolean") {
      return_value = Boolean(value)
    }
    else if (type === "object") {
        return_value = Object(value)
    }
    else if (type === "undefined") {
        return_value = undefined; 
        
    } else if (type === "null") {
        return_value = null; 
    }
    else {
        return_value = value;
    }

    return return_value
}


function equal() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 == convertedValue2}`;
  }
  
  function strictEqual() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 === convertedValue2}`;
  }
  
  function notEqual() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 != convertedValue2}`;
  }
  
  function strictNotEqual() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 !== convertedValue2}`;
  }
  
  function greaterThan() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 > convertedValue2}`;
  }
  
  function lessThan() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 < convertedValue2}`;
  }
  
  function greaterOrEqual() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 >= convertedValue2}`;
  }
  
  function lessOrEqual() {
    const { convertedValue1, convertedValue2 } = convertedValues();
    document.getElementById("result").innerText = `Result: ${convertedValue1 <= convertedValue2}`;
  }