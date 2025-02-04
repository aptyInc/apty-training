function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  }

  function transpose() {
    const input = document.getElementById("matrixInput").value;
    const rows = input.split(",").map((row) => row.trim().split(" ").map(Number));

    const transposed = transposeMatrix(rows);

    const outputContainer = document.getElementById("output");
    let formattedResult = transposed.map(row => row.join(" ")).join("\n");
    outputContainer.textContent = formattedResult;
  }