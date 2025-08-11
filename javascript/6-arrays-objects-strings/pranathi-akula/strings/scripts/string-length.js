function stringLength() {
  const inputString = document.getElementById("input").value.trim();

  if (!inputString) {
    alert("Please enter a string.");
    return;
  }
  const words = inputString.split(" ");
  const wordLengths = words.map((word) => word.length);
  const result = wordLengths.join(" ");
  document.getElementById("output").textContent = result;
}
