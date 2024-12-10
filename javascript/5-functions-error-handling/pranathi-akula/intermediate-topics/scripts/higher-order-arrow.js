const filterArray = (array, callback) => array.filter(callback);
const numbers = [5, 12, 8, 130, 44, 2, 10, 20];

document.getElementById("originalArray").textContent = numbers.join(", ");
document.getElementById("filterButton").addEventListener("click", () => {
  const limit = parseInt(document.getElementById("limit").value, 10);
  if (isNaN(limit)) {
    alert("Please enter a valid number.");
    return;
  }
  const filtered = filterArray(numbers, (num) => num <= limit);
  document.getElementById("filteredArray").textContent = filtered.join(", ");
});
