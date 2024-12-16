function findMostFrequent() {
  const arrayInput = document.getElementById("arrayInput").value;
  let array;

  // Try to parse the input string to an array
  try {
    array = JSON.parse(arrayInput);
    if (!Array.isArray(array)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("result").textContent =
      "Invalid input. Please enter a valid array.";
    return;
  }

  // Find the most frequent element using reduce
  const frequencyMap = array.reduce((map, num) => {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  let mostFrequentElement = null;
  let maxFrequency = 0;

  for (const [key, value] of Object.entries(frequencyMap)) {
    if (value > maxFrequency) {
      maxFrequency = value;
      mostFrequentElement = Number(key);
    }
  }

  // Display the most frequent element
  document.getElementById(
    "result"
  ).textContent = `The most frequent element is: ${mostFrequentElement}`;
}
