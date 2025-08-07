function wordLengths(str) {
  return str
    .split(" ")
    .map((word) => word.length)
    .join(" ");
}

function showWordLengths() {
  const input = document.getElementById("inputText").value;

  const output = wordLengths(input);

  document.getElementById("result").textContent = output;
}
