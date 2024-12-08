const sortNumbers = function (array) {
    return array.sort((a, b) => a - b);
};

function sortArray(event) {
    event.preventDefault();
    const input = document.getElementById("numbers").value;
    const numberArray = input.split(",").map(Number);
    const sortedArray = sortNumbers(numberArray);

    const table = document.getElementById("resultTable");
    table.innerHTML = `
                    <tr>
                    <th>SORTED</th>
                    </tr>
                `;

    sortedArray.forEach((num, index) => {
        const row = table.insertRow();
        row.insertCell(0).innerText = num;
    });
}
