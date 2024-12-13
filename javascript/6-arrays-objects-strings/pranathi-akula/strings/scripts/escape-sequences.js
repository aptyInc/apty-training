function replaceEscapeSequences() {
  const inputString = document.getElementById("input").value;

  const result = inputString.replace(/\n/g, "\\n").replace(/\t/g, "\\t");

  document.getElementById("output").textContent = result;
}
