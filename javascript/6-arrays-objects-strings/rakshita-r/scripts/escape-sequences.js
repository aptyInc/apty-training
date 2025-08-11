function replaceEscapeSequences() {
  const inputString = document.getElementById("stringInput").value;

  const replacedString = inputString
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t");

  document.getElementById(
    "result"
  ).innerText = `Replaced String: ${replacedString}`;
}
