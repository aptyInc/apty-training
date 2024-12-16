function chunkArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  const chunkSize = parseInt(document.getElementById("chunkSize").value, 10);
  let array;

  // Try to parse the input string to an array
  try {
    array = JSON.parse(arrayInput);
    if (!Array.isArray(array)) throw new Error("Input is not an array");
  } catch (e) {
    document.getElementById("chunkedArray").textContent =
      "Invalid input. Please enter a valid array.";
    return;
  }

  // Validate chunk size
  if (isNaN(chunkSize) || chunkSize <= 0) {
    document.getElementById("chunkedArray").textContent =
      "Please enter a valid positive number for chunk size.";
    return;
  }

  // Chunk the array
  const chunked = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunked.push(array.slice(i, i + chunkSize));
  }

  // Display the chunked array
  document.getElementById("chunkedArray").textContent = JSON.stringify(
    chunked,
    null,
    2
  );
}
