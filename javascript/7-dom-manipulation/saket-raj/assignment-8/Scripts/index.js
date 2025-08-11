const tbody = document.querySelector("#myTable tbody");

// Generate table rows dynamically
for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent = `Row ${i}`;

  const cell2 = document.createElement("td");

  const upBtn = document.createElement("button");
  upBtn.textContent = "Up";
  upBtn.addEventListener("click", () => moveUp(row));

  const downBtn = document.createElement("button");
  downBtn.textContent = "Down";
  downBtn.addEventListener("click", () => moveDown(row));

  const topBtn = document.createElement("button");
  topBtn.textContent = "Top";
  topBtn.addEventListener("click", () => moveTop(row));

  const bottomBtn = document.createElement("button");
  bottomBtn.textContent = "Bottom";
  bottomBtn.addEventListener("click", () => moveBottom(row));

  cell2.append(upBtn, downBtn, topBtn, bottomBtn);

  row.append(cell1, cell2);
  tbody.appendChild(row);
}

function moveUp(row) {
  const prev = row.previousElementSibling;
  if (prev) {
    tbody.insertBefore(row, prev);
  }
}

function moveDown(row) {
  const next = row.nextElementSibling;
  if (next) {
    tbody.insertBefore(next, row);
  }
}

function moveTop(row) {
  tbody.insertBefore(row, tbody.firstElementChild);
}

function moveBottom(row) {
  tbody.appendChild(row);
}
