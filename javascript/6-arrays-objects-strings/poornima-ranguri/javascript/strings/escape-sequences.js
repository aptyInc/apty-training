// function onPerformAction() {
//   const userInputElement = document.getElementById("userText");
//   let userInput = userInputElement.value.trim(); //Removing Extra spaces
//   let replacedString = userInput.replace(/\\n/g, "\\n");
//   let resultString = replacedString.replace(/\t/g, "\\t");
//   document.getElementById("result").textContent = resultString; //appending length to home
// }

function onPerformAction() {
  const userInputElement = document.getElementById("userText");
  const userInput = userInputElement.value;

  const replacedString = userInput
    .replace(/\n/g, "\\\\n")
    .replace(/\t/g, "\\\\t");

  document.getElementById(
    "result"
  ).textContent = `Replaced string: ${replacedString}`;
}

document.getElementById("userText").addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const textarea = this;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value =
      textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);

    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }
});
