function transposeMatrix() {
    let matrix = document.getElementById('matrixInput').value;
    matrix = JSON.parse(matrix);


    displayMatrix(matrix, 'originalMatrix');


    let rows = matrix.length;
    let col = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = i + 1; j < col; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }

    }


    displayMatrix(matrix, 'transposedMatrix');
}

function displayMatrix(matrix, elementId) {
    let table = document.getElementById(elementId);
    table.innerHTML = ''; 

    matrix.forEach(row => {
        let rowElement = document.createElement('tr');
        row.forEach(cell => {
            let cellElement = document.createElement('td');
            cellElement.textContent = cell;
            rowElement.appendChild(cellElement);
        });
        table.appendChild(rowElement);
    });
}