const tableBody = document.getElementById("myTable").querySelector("tbody");

for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = `Row ${i}`;
    row.appendChild(cell);

    const btnCell = document.createElement("td");

    const upBtn = document.createElement("button");
    upBtn.textContent = "Up";
    upBtn.addEventListener("click", () => moveUp(row));
    btnCell.appendChild(upBtn);

    const downBtn = document.createElement("button");
    downBtn.textContent = "Down";
    downBtn.addEventListener("click", () => moveDown(row));
    btnCell.appendChild(downBtn);

    const topBtn = document.createElement("button");
    topBtn.textContent = "Top";
    topBtn.addEventListener("click", () => moveTop(row));
    btnCell.appendChild(topBtn);

    const bottomBtn = document.createElement("button");
    bottomBtn.textContent = "Bottom";
    bottomBtn.addEventListener("click", () => moveBottom(row));
    btnCell.appendChild(bottomBtn);

    row.appendChild(btnCell);
    tableBody.appendChild(row);
}

function moveUp(row) {
    const prev = row.previousElementSibling;
    if (prev) tableBody.insertBefore(row, prev);
}

function moveDown(row) {
    const next = row.nextElementSibling;
    if (next) tableBody.insertBefore(next, row);
}

function moveTop(row) {
    tableBody.insertBefore(row, tableBody.firstElementChild);
}

function moveBottom(row) {
    tableBody.appendChild(row);
}
