function transposeMatrix() {
  const matrixInput = document.getElementById("matrixInput").value;
  let matrix;

  // Try to parse the input string to a 2D array
  try {
    matrix = JSON.parse(matrixInput);
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
      throw new Error("Input is not a valid 2D array.");
    }
  } catch (e) {
    document.getElementById("result").textContent =
      "Invalid input. Please enter a valid 2D array.";
    return;
  }

  // Transpose the matrix
  const transposed = matrix[0].map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );

  document.getElementById("result").textContent = JSON.stringify(
    transposed,
    null,
    2
  );
}
