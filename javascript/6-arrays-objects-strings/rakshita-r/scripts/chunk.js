function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  
  function chunkArrayExample() {
    // Get the user inputs for the array and chunk size
    const arrayInput = document.getElementById('arrayInput').value;
    const chunkSizeInput = document.getElementById('chunkSizeInput').value;
  
    // Convert the array input (comma-separated string) into an actual array
    const array = arrayInput.split(',').map(item => parseInt(item.trim(), 10));
  
    // Ensure the chunk size is a valid number
    const chunkSize = parseInt(chunkSizeInput, 10);
  
    if (isNaN(chunkSize) || chunkSize <= 0) {
      alert("Please enter a valid chunk size.");
      return;
    }
  
    // Call the chunkArray function
    const chunkedArray = chunkArray(array, chunkSize);
  
    // Display the result in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p><strong>Chunked Array:</strong> ${JSON.stringify(chunkedArray)}</p>`;
  }
  