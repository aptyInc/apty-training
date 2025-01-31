const value1Input = document.getElementById('value1');
    const value2Input = document.getElementById('value2');
    const resultDiv = document.getElementById('result');

    
    function displayResult(result) {
      resultDiv.innerHTML = "Result: " + result;
    }

    
    function performAND() {
      const value1 = parseInt(value1Input.value);
      const value2 = parseInt(value2Input.value);
      const result = value1 & value2;
      displayResult(result);
    }

    
    function performOR() {
      const value1 = parseInt(value1Input.value);
      const value2 = parseInt(value2Input.value);
      const result = value1 | value2;
      displayResult(result);
    }

   
    function performXOR() {
      const value1 = parseInt(value1Input.value);
      const value2 = parseInt(value2Input.value);
      const result = value1 ^ value2;
      displayResult(result);
    }

    function performNOT() {
      const value1 = parseInt(value1Input.value);
      const result = ~value1;
      displayResult(result);
    }

 
    function performLeftShift() {
      const value1 = parseInt(value1Input.value);
      const result = value1 << 1; 
      displayResult(result);
    }


    function performRightShift() {
      const value1 = parseInt(value1Input.value);
      const result = value1 >> 1;
      displayResult(result);
    }