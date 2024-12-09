
const filterArray = (array, callback) => {
    const filtered = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) { 
            filtered.push(array[i])
        }
    }
    return filtered
}


function filterNumbers() {
    const numbersInput = document.getElementById('numbers').value
    const limit = parseFloat(document.getElementById('limit').value)

    if (!numbersInput.trim() || isNaN(limit)) {
        document.getElementById('result').innerText = 'Please provide valid input and a limit!'
        return;
    }

    const numbers = numbersInput.split(',').map(num => parseFloat(num.trim()))


    const filteredNumbers = filterArray(numbers, num => num <= limit)

    document.getElementById('result').innerText = `Filtered Numbers: ${filteredNumbers.join(', ')}`
}

