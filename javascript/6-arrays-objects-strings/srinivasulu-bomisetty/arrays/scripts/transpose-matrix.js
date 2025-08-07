function transposeMatrix(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposed = transposeMatrix(matrix);

document.getElementById("originalMatrix").innerText = JSON.stringify(matrix);
document.getElementById("transposedMatrix").innerText =
  JSON.stringify(transposed);
