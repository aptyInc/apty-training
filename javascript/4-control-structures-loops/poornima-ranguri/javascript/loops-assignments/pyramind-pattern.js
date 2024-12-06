function generatePyramid() {
    const rowsInput = document.getElementById('rowsInput');
    const pyramidResultElement = document.getElementById('pyramidResult');
    
  
    const rows = parseInt(rowsInput.value);

   
    if (isNaN(rows) || rows < 1 || rows > 20) {
        pyramidResultElement.innerHTML = 'Please enter a valid number of rows (1-20).';
        return;
    }

    let pyramidPattern = '';


    for (let i = 1; i <= rows; i++) {
  
        let rowPattern = '';
        
      
        for (let j = 1; j <= rows - i; j++) {
            rowPattern += ' ';
        }
        
        for (let k = 1; k <= 2 * i - 1; k++) {
            rowPattern += '*';
        }
        
  
        rowPattern += '\n';
        
        pyramidPattern += rowPattern;
    }
    pyramidResultElement.innerHTML = `
        <pre>${pyramidPattern}</pre>
    `;
}
