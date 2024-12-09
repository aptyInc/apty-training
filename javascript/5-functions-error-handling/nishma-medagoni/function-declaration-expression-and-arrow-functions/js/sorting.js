const sortArray = function() {
    const input = document.getElementById('numbers').value

    const numbers = input.split(',')

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i].trim())
        if (isNaN(numbers[i])) { 
            document.getElementById('result').innerText = 'Please enter valid numbers!'
            return
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap numbers if out of order
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }

    document.getElementById('result').innerText = `${numbers.join(', ')}`

}