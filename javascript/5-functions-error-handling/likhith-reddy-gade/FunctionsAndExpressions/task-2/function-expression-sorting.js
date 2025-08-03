document.getElementById("sortForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("arrayInput").value;
  const numbers = input.split(",").map(Number);

  const sortArray = function (arr) {
    return arr.sort((a, b) => a - b);
  };

  const sortedNumbers = sortArray(numbers);

  const table = document.getElementById("resultTable");
  table.innerHTML = ""; // Clear previous results

  const row = table.insertRow();
  sortedNumbers.forEach((num) => {
    const cell = row.insertCell();
    cell.textContent = num;
  });
});
