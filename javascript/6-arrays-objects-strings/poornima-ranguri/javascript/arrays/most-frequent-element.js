function mostFrequent(arr) {
  const frequencyMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const mostFrequentElement = Object.entries(frequencyMap).reduce(
    (maxEntry, currentEntry) => {
      return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry; // Compare counts
    }
  );

  return parseInt(mostFrequentElement[0]);
}

function onResult() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const result = mostFrequent(userArray);

  document.getElementById("result").textContent = `[${result}]`;
}
