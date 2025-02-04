function stringLength(inputString) {
  return inputString
    .split(" ")
    .map((word) => word.length)
    .join(" ");
}

function handleOnSubmit(event) {
  event.preventDefault();
  const userInput = document.querySelector("#string_input").value.trim();
  const result = stringLength(userInput);
  document.querySelector(".output").innerText = result;
}
