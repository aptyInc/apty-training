const sortArray = function (arr) {
  return arr.sort((a, b) => a - b);
};

document
  .getElementById("sortForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("numbers").value;
    const numberArray = input.split(",").map((num) => parseFloat(num.trim()));

    if (numberArray.some(isNaN)) {
      alert("Please enter a valid list of numbers separated by commas.");
      return;
    }

    const sortedArray = sortArray(numberArray);

    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = "";

    sortedArray.forEach((value, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${index}</td><td>${value}</td>`;
      resultTable.appendChild(row);
    });
  });
