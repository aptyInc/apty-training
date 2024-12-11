function escapeString(inputString) {
  return inputString.replaceAll("\n", '\\\\n').replaceAll("\t", "\\\\t");
}

function handleOnSubmit(event) {
  event.preventDefault();
  const userInput = document.querySelector("#string_input").value;
  const result = escapeString(userInput);
  document.querySelector(".output").innerText = result;
}
