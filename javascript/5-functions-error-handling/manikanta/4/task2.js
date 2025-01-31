function filterArray(arr, callback) {
    return arr.filter(callback);
}

// Function to handle user input and display results
function filterNumbers() {
    const inputNumbers = document.getElementById('numberInput').value;
    const limit = Number(document.getElementById('limitInput').value);
    
    if (inputNumbers.trim() === '' || isNaN(limit)) {
        document.getElementById('result').innerHTML = "Please provide valid numbers and limit.";
        return;
    }

    // Convert the comma-separated string into an array of numbers
    const numbersArray = inputNumbers.split(',').map(num => Number(num.trim()));

    // Using an arrow function as a callback to filter out numbers greater than the limit
    const filteredNumbers = filterArray(numbersArray, (num) => num <= limit);

    // Display the filtered numbers
    document.getElementById('result').innerHTML = `Filtered numbers: ${filteredNumbers.join(', ')}`;
}