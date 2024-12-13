
function transposeMatrix() {
    const input = document.getElementById('matrixInput').value;
    // Convert the input string to a 2D array
    const matrix = input.split(',').map(row => row.trim().split(' ').map(Number));
    
    // Transpose the matrix
    const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));

    // Format and display the result
    const resultText = transposed.map(row => row.join(' ')).join('\n');
    document.getElementById('result').innerText = `Transposed Matrix:\n${resultText}`;
}

