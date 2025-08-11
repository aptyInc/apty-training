function Characterfreq() {
    const input = document.getElementById("text").value;
  
    let frequency = {};
    for (const char in input) {
      if (frequency[input[char]]) {
        frequency[input[char]] += 1;
      } else {
        frequency[input[char]] = 1;
      }
    }
  
    let characterfreq = "<h3>Character Frequency:</h3>";
    for (const char in frequency) {
      characterfreq += `${char}: ${frequency[char]}<br>`;
    }
  
    characterfreq += "";
    document.getElementById("result").innerHTML = `Result: ${characterfreq}`;
  }