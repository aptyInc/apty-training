function getUnicodeValues(inputString) {
  return inputString.split("").map((value) => value.charCodeAt(value));
}

function handleOnSubmit(event) {
  event.preventDefault();
  const userInput = document.querySelector("#string_input").value.trim();
  const result = getUnicodeValues(userInput);
  document.querySelector(".output").innerText = result;
}
