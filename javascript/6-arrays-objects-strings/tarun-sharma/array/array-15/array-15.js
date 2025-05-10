function transposeMatrix() {

    var matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    var transposed = matrix[0].map(function(_, i) {
        
        return matrix.map(function(row) {

            return row[i];
        });
    });

    document.getElementById("result").innerText = JSON.stringify(transposed);


}
