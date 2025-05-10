function getUnicodeValues() {
  const input = document.getElementById("inputString").value;
  const result = input.split("").map((char) => char.charCodeAt(0));
  document.getElementById("result").innerText = JSON.stringify(result);
}
