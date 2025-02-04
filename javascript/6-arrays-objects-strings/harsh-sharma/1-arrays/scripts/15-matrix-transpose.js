function handleOnSubmit(event) {
  event.preventDefault();
  const output_div = document.querySelector(".output");
  const userMatrix = document.querySelector("#matrix_input").value;

  if (!userMatrix) {
    output_div.innerText = `Please provide a matrix to perform the operation.`;
    return;
  }

  try {
    const parsedMatrix = JSON.parse(userMatrix);

    if (!Array.isArray(parsedMatrix) || !Array.isArray(parsedMatrix[0])) {
      output_div.innerText = `Invalid matrix format. Please check the input.`;
      return;
    }

    const result = transposeMatrix(parsedMatrix);
    output_div.innerText = JSON.stringify(result);
  } catch (error) {
    output_div.innerText = `Invalid JSON matrix. Please check the input.`;
    throw new Error("Invalid JSON matrix");
  }
}

// Function to transpose a matrix
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposed = new Array(cols);
  for (let i = 0; i < cols; i++) {
    transposed[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed;
}
