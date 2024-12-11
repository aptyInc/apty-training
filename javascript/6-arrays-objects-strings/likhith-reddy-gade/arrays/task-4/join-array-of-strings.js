function convertToSentence() {
  const input = document.getElementById("string-input").value;
  if (input) {
    const words = input.split(",").map((word) => word.trim());
    const sentence = words.join(" ");
    const capitalizedSentence =
      sentence.charAt(0).toUpperCase() + sentence.slice(1);
    document.getElementById("sentence-result").innerText = capitalizedSentence;
  } else {
    document.getElementById("sentence-result").innerText =
      "Please enter valid words.";
  }
}
