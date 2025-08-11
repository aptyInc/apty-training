function sortArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  const property = document.getElementById("propertyInput").value;
  let array;

  // Try to parse the input string to an array of objects
  try {
    array = JSON.parse(arrayInput);
    if (!Array.isArray(array)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("sortedArray").textContent =
      "Invalid input. Please enter a valid array of objects.";
    return;
  }

  if (!property) {
    document.getElementById("sortedArray").textContent =
      "Please enter a property to sort by.";
    return;
  }

  array.sort((a, b) => {
    if (a[property] > b[property]) return -1;
    if (a[property] < b[property]) return 1;
    return 0;
  });

  document.getElementById("sortedArray").textContent = JSON.stringify(
    array,
    null,
    2
  );
}
