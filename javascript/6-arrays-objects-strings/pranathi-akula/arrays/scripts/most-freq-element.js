function mostFrequentElement(arr) {
  const frequencyMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(frequencyMap).reduce((mostFrequentElement, num) =>
    frequencyMap[num] > frequencyMap[mostFrequentElement]
      ? num
      : mostFrequentElement
  );
}

function findFrequentElement() {
  const input = document.getElementById("inputArray").value;
  const array = input.split(",").map((num) => parseInt(num.trim()));
  const result = mostFrequentElement(array);
  document.getElementById(
    "result"
  ).textContent = `Result: Most Frequent Element: ${result}`;
}
