const resultTable = document.getElementById("resultTable");


const sortArray = function (arr) {
    return arr.sort((a, b) => a - b);
};

function sortNumbers() {
    const raw = document.getElementById("arrInput").value.trim();

    if (!raw) {
        resultTable.innerHTML = "<tr><td>Please enter some numbers</td></tr>";
        return;
    }

    const nums = raw.split(",").map(x => Number(x.trim()));

    if (nums.some(isNaN)) {
        resultTable.innerHTML = "<tr><td>Invalid input: only numbers allowed</td></tr>";
        return;
    }

    const sorted = sortArray(nums);

    
    let tableContent = "<tr><th>Sorted Values</th></tr>";

    for (const num of sorted) {
        tableContent += `<tr><td>${num}</td></tr>`;
    }

    resultTable.innerHTML = tableContent;
}
