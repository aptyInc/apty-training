const sortingNumbers = function (numbers) {
  return numbers.sort((a, b) => a - b);
};

document.getElementById("sort").addEventListener("click", () => {
  const input = document.getElementById("numbers").value;
  const numberArray = input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));

  if (numberArray.length === 0) {
    document.getElementById("output").innerHTML =
      "<p>Please enter valid numbers.</p>";
    return;
  }

  const sortedArray = sortingNumbers(numberArray);

  let tableHTML = '<table border="1"><tr><th>Sorted Numbers</th></tr>';
  sortedArray.forEach((num) => {
    tableHTML += `<tr><td>${num}</td></tr>`;
  });
  tableHTML += "</table>";

  document.getElementById("output").innerHTML = `Result: ${tableHTML}`;
});
