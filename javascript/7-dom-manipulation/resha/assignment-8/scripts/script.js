const tableBody = document.getElementById("myTable").querySelector("tbody");

for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.textContent = "Row " + i;
    row.appendChild(cell1);

    let cell2 = document.createElement("td");

    let upBtn = document.createElement("button");
    upBtn.textContent = "Up";
    upBtn.onclick = () => {
        if (row.previousElementSibling) {
            tableBody.insertBefore(row, row.previousElementSibling);
        }
    };
    cell2.appendChild(upBtn);

    let downBtn = document.createElement("button");
    downBtn.textContent = "Down";
    downBtn.onclick = () => {
        if (row.nextElementSibling) {
            tableBody.insertBefore(row.nextElementSibling, row);
        }
    };
    cell2.appendChild(downBtn);

    let topBtn = document.createElement("button");
    topBtn.textContent = "Top";
    topBtn.onclick = () => {
        tableBody.insertBefore(row, tableBody.firstElementChild);
    };
    cell2.appendChild(topBtn);
    
    let bottomBtn = document.createElement("button");
    bottomBtn.textContent = "Bottom";
    bottomBtn.onclick = () => {
        tableBody.appendChild(row);
    };
    cell2.appendChild(bottomBtn);

    row.appendChild(cell2);
    tableBody.appendChild(row);
}