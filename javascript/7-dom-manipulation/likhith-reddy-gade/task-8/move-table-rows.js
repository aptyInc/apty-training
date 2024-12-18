document.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  const table = document.getElementById("table").querySelector("tbody");

  if (event.target.classList.contains("up")) {
    const prev = row.previousElementSibling;
    if (prev) table.insertBefore(row, prev);
  } else if (event.target.classList.contains("down")) {
    const next = row.nextElementSibling;
    if (next) table.insertBefore(next, row);
  } else if (event.target.classList.contains("top")) {
    table.insertBefore(row, table.firstElementChild);
  } else if (event.target.classList.contains("bottom")) {
    table.appendChild(row);
  }
});
