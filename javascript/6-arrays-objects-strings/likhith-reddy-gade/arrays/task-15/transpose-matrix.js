function transposeMatrix() {
  const input = document.getElementById("matrix-input").value;

  if (!input) {
    document.getElementById("transpose-matrix-result").innerText =
      "Please enter a valid matrix.";
    return;
  }

  try {
    const matrix = input
      .split(";")
      .map((row) => row.split(",").map((item) => parseFloat(item.trim())));
    const transposed = matrix[0].map((_, colIndex) =>
      matrix.map((row) => row[colIndex])
    );

    document.getElementById(
      "transpose-matrix-result"
    ).innerText = `Transposed Matrix: ${JSON.stringify(transposed)}`;
  } catch (error) {
    document.getElementById("transpose-matrix-result").innerText =
      "Invalid matrix input.";
  }
}
