function padStringWithZeros(inputString) {
  return inputString.padStart(10, "0");
}

function handleOnSubmit(event) {
  event.preventDefault();
  const userInput = document.querySelector("#string_input").value.trim();
  const result = padStringWithZeros(userInput);
  document.querySelector(".output").innerText = result;
}
