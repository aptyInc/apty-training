function compareEqual() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 == value2);
  }
  
  function compareStrictEqual() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 === value2);
  }
  
  function compareNotEqual() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 != value2);
  }
  
  function compareStrictNotEqual() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 !== value2);
  }
  
  function compareGreaterThan() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 > value2);
  }
  
  function compareLessThan() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 < value2);
  }
  
  function compareGreaterThanOrEqual() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 >= value2);
  }
  
  function compareLessThanOrEqual() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    document.getElementById("result").textContent = "Result: " + (value1 <= value2);
  }
  