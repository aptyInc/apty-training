function charFrequency() {
    const input = document.getElementById("string").value; 
    const frequency = {}; 
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (frequency[char]) {
        frequency[char]++; 
      } else {
        frequency[char] = 1; 
      }
    }
  
    let result = "Character Frequencies:<br>";
    for (const char in frequency) {
      result += `${char}: ${frequency[char]}<br>`; 
    }
  
    document.getElementById("result").innerHTML = result; 
  }
  