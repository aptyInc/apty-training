const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", function () {
    const input = document.getElementById('array').value;

    if (!input.trim()) {
        output.innerText = "Please enter a 2D array.";
        return;
    }

    let matrix;
    try {
        matrix = JSON.parse(input);
    } catch (error) {
        output.innerText = `Error: ${error}. Invalid array format.`;
        return;
    }

    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
        output.innerText = "Input must be a 2D array";
        return;
    }

    const transposed = [];

    for (let i = 0; i < matrix[0].length; i++) {
        const row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        transposed.push(row);
    }

    output.innerText = "Transposed Matrix:\n" + JSON.stringify(transposed);
});
