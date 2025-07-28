function transposeMatrix() {
    const input = document.getElementById("two-d-arr").value
    let inputMatrix = JSON.parse(input)
    let transposedMatrix = performTranspose(inputMatrix)
    document.getElementById("res").innerText = `[`
    for (const arr of transposedMatrix) {
        document.getElementById("res").innerText += `[ ${arr}, ]`
    }
    document.getElementById("res").innerText += `]`
}
function performTranspose(inputMatrix) {
    let transposeMatrix = []
    for (let i = 0; i < inputMatrix[0].length; i++) {
        transposeMatrix[i] = []
    }
    for (let i = 0; i < inputMatrix.length; i++) {
        let size = inputMatrix[i].length
        for (let j = 0; j < size; j++) {
            transposeMatrix[j][i] = inputMatrix[i][j]
        }
    }
    return transposeMatrix
}