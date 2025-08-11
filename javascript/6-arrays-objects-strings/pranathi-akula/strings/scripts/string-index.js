function getStringIndex() {
  const inputString = document.getElementById("input").value.trim();

  if (inputString === "") {
    document.getElementById("output").textContent = "null";
    return;
  }

  const result = `${inputString[0]} ${inputString[inputString.length - 1]}`;
  document.getElementById("output").textContent = result;
}
