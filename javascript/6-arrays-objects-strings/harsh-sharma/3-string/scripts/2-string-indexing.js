function getFirstAndLastCharacters(inputString) {
    if (inputString.length === 0) {
      return null;
    }
    return `${inputString[0]} ${inputString[inputString.length - 1]}`;
  }
  
  function handleOnSubmit(event) {
    event.preventDefault();
    const userInput = document.querySelector("#string_input").value.trim();
    const result = getFirstAndLastCharacters(userInput);
    document.querySelector(".output").innerText = result || "String is empty.";
  }
  