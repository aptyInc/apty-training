function replaceEscapeSequences() {
  const input = document.getElementById("inputString").value;
  const result = input.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
  document.getElementById("result").innerText = result;
}
