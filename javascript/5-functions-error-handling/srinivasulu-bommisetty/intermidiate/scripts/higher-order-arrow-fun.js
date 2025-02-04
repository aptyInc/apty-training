function filterNumbers(numbers, callback) {
    return numbers.filter(callback);
}

document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    const numbersInput = document.getElementById('numbers').value;
    const limit = parseInt(document.getElementById('limit').value);

    const numbers = numbersInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    const filteredNumbers = filterNumbers(numbers, (num) => num < limit);

    document.getElementById('result').textContent = `Filtered Numbers: ${filteredNumbers.join(', ')}`;
});