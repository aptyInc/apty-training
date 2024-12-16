function printPyramid() {
  const rows = parseInt(document.getElementById("rows").value);
  let pattern = "";

  for (let i = 1; i <= rows; i++) {
    pattern += " ".repeat(rows - i) + "*".repeat(2 * i - 1) + "\n";
  }

  document.getElementById("result").textContent = pattern;
}
