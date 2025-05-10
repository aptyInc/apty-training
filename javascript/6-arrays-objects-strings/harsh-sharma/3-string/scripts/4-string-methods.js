function sortStringAlphabetically(inputString) {
    return inputString.trim().split("").sort().join("");
  }
  
  function handleOnSubmit(event) {
    event.preventDefault();
    const userInput = document.querySelector("#string_input").value;
    const result = sortStringAlphabetically(userInput);
    document.querySelector(".output").innerText = result;
  }
  