function outerFunction(word1) {
    function middleFunction(word2) {
      function innerFunction(word3) {
        return word1 + " " + word2 + " " + word3;
      }
      return innerFunction;
    }
    return middleFunction;
  }
  
  document.getElementById("submit").addEventListener("click", function () {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
  
    const result = outerFunction(input1)(input2)(input3);
  
    document.getElementById("output").textContent = "Result: " + result;
  });
  