function transposeMatrix() {
  const input = document.getElementById("array").value;
  const result = document.getElementById("result");

  try {
    const matrix = eval(input); // i/p should be in js style arr of arrays

    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
      result.innerText = "Invalid input";
      return;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const t = [];

    for (let i = 0; i < cols; i++) {
      t[i] = [];
      for (let j = 0; j < rows; j++) {
        t[i][j] = matrix[j][i];
      }
    }

    let display = "Transposed matrix is:<br>";
    for (let row of t) {
      display += `[${row.join(", ")}]<br>`;
    }

    result.innerHTML = display;
  } catch {
    result.innerText = "Invalid input";
  }
}
