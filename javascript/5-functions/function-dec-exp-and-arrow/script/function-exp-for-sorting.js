
// Function expression to sort an array of numbers
const sortArray = function (arr) {
    return arr.sort((a, b) => a - b); // Sort in ascending order
};

// Function to handle form input and display sorted array
function displaySortedArray() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())); // Parse input to numbers

    if (numbers.some(isNaN)) {
        alert("Please enter a valid comma-separated list of numbers.");
        return;
    }

    const sortedNumbers = sortArray([...numbers]); // Sort the numbers (using a copy to preserve original)
    document.getElementById('originalArray').textContent = numbers.join(', ');
    document.getElementById('sortedArray').textContent = sortedNumbers.join(', ');

    // Display the table
    document.getElementById('resultTable').style.display = 'table';
}