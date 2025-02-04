function transposeMatrix(matrix) {
  if (matrix.length === 0) return [];

  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let resultElement = document.getElementById("result");
let paragraphElement = document.createElement("p");
paragraphElement.textContent = JSON.stringify(originalMatrix);
resultElement.appendChild(paragraphElement);

function onTranspose() {
  const transposedMatrix = transposeMatrix(originalMatrix);

  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = JSON.stringify(transposedMatrix);
  resultElement.appendChild(paragraphElement);
}
