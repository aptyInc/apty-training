function padString() {
  const input = document.getElementById("inputString").value;
  const result = input.padStart(10, "0");
  document.getElementById("result").innerText = result;
}
