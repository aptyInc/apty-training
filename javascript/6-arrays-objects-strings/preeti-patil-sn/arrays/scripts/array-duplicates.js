function removeDuplicates() {
  const arrayInput = document.getElementById("arrayInput").value;
  let array;

  // Try to parse the input string to an array
  try {
    array = JSON.parse(arrayInput);
    if (!Array.isArray(array)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("resultArray").textContent =
      "Invalid input. Please enter a valid array.";
    return;
  }

  // Remove duplicates using a simple loop
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  // Display the resulting array
  document.getElementById("resultArray").textContent = JSON.stringify(
    uniqueArray,
    null,
    2
  );
}
