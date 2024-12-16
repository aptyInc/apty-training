function calculateFrequency() {
  const str = document.getElementById("string").value;
  const frequency = {};

  for (const char in str) {
    frequency[str[char]] = (frequency[str[char]] || 0) + 1;
  }

  let result = "Character Frequencies:\n";
  for (const char in frequency) {
    result += `${char}: ${frequency[char]}\n`;
  }

  document.getElementById("result").textContent = result;
}
