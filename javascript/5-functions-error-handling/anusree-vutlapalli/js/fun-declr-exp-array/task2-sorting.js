function sortNumbers() {
    var input = document.getElementById('numbers').value;

    var numberArray = input.split(','); // This creates an array of strings

    for (var i = 0; i < numberArray.length; i++) {
        numberArray[i] = parseInt(numberArray[i].trim()); // Convert each string to a number
    }

    numberArray.sort( (a, b) => (a-b));

    // Display the sorted numbers in the table
    var tableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear any previous results

    
    for (var i = 0; i < numberArray.length; i++) {
        var row = tableBody.insertRow(); 
        var cell = row.insertCell(0); 
        cell.textContent = numberArray[i]; 
    }
}
