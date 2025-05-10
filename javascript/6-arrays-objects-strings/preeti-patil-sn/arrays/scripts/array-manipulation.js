function combineArrays() {
  const array1 = document
    .getElementById("array1")
    .value.split(",")
    .map((item) => parseInt(item.trim()));
  const array2 = document
    .getElementById("array2")
    .value.split(",")
    .map((item) => parseInt(item.trim()));

  // Combine both arrays using the spread operator and remove duplicates using Set
  const combinedArray = [...new Set([...array1, ...array2])];

  document.getElementById(
    "result"
  ).textContent = `Combined Array: [${combinedArray}]`;
}
