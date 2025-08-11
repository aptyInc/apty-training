function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

document
  .getElementById("sortForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("numberInput").value;

    const numberStrings = input.split(",");
    const numbers = [];

    for (let item of numberStrings) {
      let num = parseFloat(item.trim());
      if (!isNaN(num)) {
        numbers.push(num);
      }
    }

    if (numbers.length === 0) {
      document.getElementById("output").innerHTML =
        "Please enter valid numbers.</p>";
      return;
    }

    let sorted = sortArray(numbers);
    let table = `<table><tr>`;
    sorted.forEach((num) => {
      table += `<td>${num}</td>`;
    });
    table += `</tr></table>`;

    document.getElementById("output").innerHTML = table;
  });
