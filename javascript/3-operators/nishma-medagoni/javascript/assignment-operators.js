// for getting values

function values() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    return { value1, value2 };
  }
  
  

function add() {
    let { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 += value2}`;
}
  
function subtract() {
    let { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 -= value2}`;
}
  
function multiply() {
    let { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 *= value2}`;
}
  
function divide() {
    let { value1, value2 } = values();
    if (value2 === 0) {
      document.getElementById("result").innerText = "Error: Division by zero";
    } else {
      document.getElementById("result").innerText = `Result: ${value1 /= value2}`;
    }
  }
  
  function modulus() {
    let { value1, value2 } = values();
    document.getElementById("result").innerText = `Result: ${value1 %= value2}`;
  }
  
  function increment() {
    let value1 = parseFloat(document.getElementById("value1").value);
    document.getElementById("result").innerText = `Result: ${value1++}`;
  }
  
  function decrement() {
    let value1 = parseFloat(document.getElementById("value1").value);
    document.getElementById("result").innerText = `Result: ${value1--}`;
  }
  