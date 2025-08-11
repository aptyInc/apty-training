function applyFilter(arr, callback) {
  return arr.filter(callback);
}

function filterNumbers() {
  const limit = parseInt(document.getElementById("limitInput").value);
  const originalArray = [10, 25, 50, 65, 80, 100, 45];
  const originalOutput = document.getElementById("original");
  const filteredOutput = document.getElementById("filtered");

  originalOutput.textContent = originalArray.join(", ");

  if (isNaN(limit)) {
    filteredOutput.textContent = "Please enter a valid number.";
    return;
  }

  const result = applyFilter(originalArray, (num) => num <= limit);

  filteredOutput.textContent = result.join(", ");
}
