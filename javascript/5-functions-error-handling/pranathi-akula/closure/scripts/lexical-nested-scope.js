function GenerateConcatString() {
  const outerVar = document.getElementById("outerVar").value;
  const middleVar = document.getElementById("middleVar").value;
  const innerVar = document.getElementById("innerVar").value;

  function outerFunction() {
    function middleFunction() {
      function innerFunction() {
        return `Outer: ${outerVar}, Middle: ${middleVar}, Inner: ${innerVar}`;
      }
      return innerFunction();
    }
    return middleFunction();
  }
  const result = outerFunction();
  document.getElementById("output").innerText = `Result: ${result}`;
}
