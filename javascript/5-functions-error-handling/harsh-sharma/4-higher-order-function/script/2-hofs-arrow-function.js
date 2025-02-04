const filterArray = (arr, callback) => {
    return arr.filter(callback);
};

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numbersInput = document.getElementById('numbers').value;
    const limit = parseFloat(document.getElementById('limit').value);

    const numbersArray = numbersInput.split(',').map(num => parseFloat(num.trim()));

    const callback = (num) => num <= limit;

    const filteredNumbers = filterArray(numbersArray, callback);

    document.getElementById('result').innerText = filteredNumbers.join(', ');
});