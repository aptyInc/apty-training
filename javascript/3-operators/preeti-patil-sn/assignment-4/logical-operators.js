function andOperator() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
  
    var result = value1 && value2;
  
    document.getElementById("result").textContent = "Result (&&): " + result;
  }
  
  function orOperator() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
  
    var result = value1 || value2;
  
    document.getElementById("result").textContent = "Result (||): " + result;
  }
  
  function notOperator() {
    var value1 = document.getElementById("value1").value;
  
    var result = !value1;
  
    document.getElementById("result").textContent = "Result (!): " + result;
  }
  