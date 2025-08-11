function joinWordsToSentence(words) {
  // Join the array elements into a single string
  let sentence = words.join(" ");

  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  return sentence;
}

function convertToSentence() {
  const input = document.getElementById("wordArray").value;
  const words = eval(input);
  // Call the function to join words and capitalize
  const sentence = joinWordsToSentence(words);

  document.getElementById("result").textContent = sentence;
}
