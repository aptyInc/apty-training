function removeDuplicates(arr) {
    const uniqueArray = [];
    
    // Iterate through the array and add elements to uniqueArray if not already present
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    
    return uniqueArray;
  }
  
  function removeDuplicatesExample() {
    // Get the user input for the array
    const arrayInput = document.getElementById('arrayInput').value;
  
    // Convert the array input (comma-separated string) into an actual array of numbers
    const array = arrayInput.split(',').map(item => parseInt(item.trim(), 10));
  
    // Call the removeDuplicates function
    const uniqueArray = removeDuplicates(array);
  
    // Display the result in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p><strong>Array after removing duplicates:</strong> ${JSON.stringify(uniqueArray)}</p>`;
  }
  