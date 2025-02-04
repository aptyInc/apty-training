function findMostFrequent() {
  const arrayInput = document.getElementById("frequency-array-input").value;

  if (!arrayInput) {
    document.getElementById("most-frequent-result").innerText =
      "Please enter a valid array.";
    return;
  }

  const array = arrayInput.split(",").map((item) => item.trim());
  const frequencyMap = array.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const mostFrequent = Object.keys(frequencyMap).reduce((a, b) =>
    frequencyMap[a] > frequencyMap[b] ? a : b
  );

  document.getElementById(
    "most-frequent-result"
  ).innerText = `Most Frequent: ${mostFrequent}`;
}
