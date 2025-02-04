function transposeMatrix() {
    const matrixInput = document.getElementById("matrixInput").value
    let matrix
  
    try {
      matrix = JSON.parse(matrixInput)
    } catch (e) {
      document.getElementById("result").innerText = "Invalid input. Please provide a valid 2D array in JSON format."
      return
    }
  
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
      document.getElementById("result").innerText = "Input must be a 2D array."
      return
    }
  
    const rows = matrix.length
    const cols = matrix[0].length
    const transposed = []
  
    for (let i = 0; i < cols; i++) {
      transposed[i] = []
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposed[j][i] = matrix[i][j]
      }
    }
  
    // Display result
    document.getElementById("result").innerText = JSON.stringify(transposed)
  }
  