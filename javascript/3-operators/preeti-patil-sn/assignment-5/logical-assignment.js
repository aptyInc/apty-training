function andAssignment() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
  
    if (value1) {
      value1 &&= value2;
    }
    
    document.getElementById("result").textContent = "Result (&&=): " + value1;
  }
  
  function orAssignment() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
  
    if (!value1) {
      value1 ||= value2;
    }
  
    document.getElementById("result").textContent = "Result (||=): " + value1;
  }
  
  function nullishAssignment() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
  
    value1 ??= value2;
  
    document.getElementById("result").textContent = "Result (??=): " + value1;
  }
  