
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}


function displayOutput(message) {
    document.getElementById("output").textContent = message;
}

document.getElementById("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const matrixInput = document.getElementById("matrixInput").value;

    try {
        const matrix = JSON.parse(matrixInput);

        if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
            throw new Error("Input must be a 2D array.");
        }

        const transposed = transposeMatrix(matrix);
        displayOutput(JSON.stringify(transposed, null,4));
    } catch (error) {
        displayOutput("Invalid input. Please enter a valid 2D matrix in JSON format.");
    }
});
