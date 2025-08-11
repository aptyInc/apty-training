function sortCharacters() {
  const input = document.getElementById("inputString").value;
  const result = input.split("").sort().join("");
  document.getElementById("result").innerText = result;
}
