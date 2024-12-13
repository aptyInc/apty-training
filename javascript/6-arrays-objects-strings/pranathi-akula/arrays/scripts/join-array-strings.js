function convertIntoSentence() {
  const input = document.getElementById("words").value.trim();
  const words = input.split(",").map((word) => word.trim());
  if (!input || words.length === 0) {
    document.getElementById("output").textContent = "Please enter valid words.";
    return;
  }
  const sentence = words.join(" ");
  const capitalSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  document.getElementById("output").textContent = capitalSentence;
}
