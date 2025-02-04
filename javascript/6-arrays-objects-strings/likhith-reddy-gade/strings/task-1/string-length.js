function calculateWordLengths() {
  const input = document.getElementById("inputString").value;
  const result = input
    .split(" ")
    .map((word) => word.length)
    .join(" ");
  document.getElementById("result").innerText = result;
}
