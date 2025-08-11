function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let col = 0; col < cols; col++) {
        const newRow = [];
        for (let row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

function transposeMatrixHandler() {
    const input = document.getElementById('matrixInput').value.trim();
    const matrix = input.split('\n').map(row => row.split(',').map(Number));
    const result = transposeMatrix(matrix);
    document.getElementById('output').textContent = result.map(row => row.join(', ')).join('\n');
}