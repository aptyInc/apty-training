function count() {
  const input = document.getElementById("userInput").value;

  if (input.trim() === "") {
    document.getElementById("results").innerText = "Please enter a non-empty string.";
    return;
  }

  const charCount = {};
  let output = "";

  for (let index in input) {
    let char = input[index];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let char in charCount) {
    const displayChar = char === " " ? " " : char;
    output += `'${displayChar}': ${charCount[char]}\n`;
  }

  document.getElementById("results").innerText = output;
}
