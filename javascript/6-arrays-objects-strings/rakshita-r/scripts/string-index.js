function calculateWordLengths() {
  const inputString = document.getElementById("stringInput").value.trim();

  if (!inputString) {
    document.getElementById("result").innerText =
      "Please enter a valid sentence.";
    return;
  }

  const wordLengths = inputString
    .split(" ")
    .map((word) => word.length)
    .join(" ");

  document.getElementById("result").innerText = `Word Lengths: ${wordLengths}`;
}
