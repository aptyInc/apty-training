function analyzeCharacterFrequency() {
    const textInput = document.getElementById("textInput");
    const frequencyResultElement =
      document.getElementById("frequencyResult");

    const text = textInput.value.trim();
    if (text.length === 0) {
      frequencyResultElement.innerHTML =
        "Please enter some text to analyze.";
      return;
    }

    const frequencyMap = new Map();

    for (let char of text) {
      char = char.toLowerCase();

      if (char.match(/[a-z0-9]/i)) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
      }
    }
    const sortedFrequency = Array.from(frequencyMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    if (sortedFrequency.length === 0) {
      frequencyResultElement.innerHTML = "No characters found to analyze.";
      return;
    }

    const frequencyHTML = sortedFrequency
      .map(
        ([char, count]) => `
            <div class="frequency-item">
                <span>Character: '${char}'</span>
                <span>Frequency: ${count}</span>
            </div>
        `
      )
      .join("");

    frequencyResultElement.innerHTML = `
            <h3>Character Frequency Analysis</h3>
            ${frequencyHTML}
            <p>Total Unique Characters: ${sortedFrequency.length}</p>
        `;
  }
