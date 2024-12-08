function outerFunction(outerText) {
    return function middleFunction(middleText) {
      return function innerFunction(innerText) {
        return `Outer: ${outerText}, Middle: ${middleText}, Inner: ${innerText}`;
      };
    };
  }
  
  function onGetString() {
    const outerText = document.getElementById("outerText").value;
    const middleText = document.getElementById("middleText").value;
    const innerText = document.getElementById("innerText").value;
  

    if (!outerText || !middleText || !innerText) {
      document.getElementById("result").innerText =
        "Please fill in all the fields.";
      return;
    }
  

    const result = outerFunction(outerText)(middleText)(innerText);
  

    document.getElementById("result").innerText = result;
  }
  