function sumOfNumbers(...numbers) {
    let total = 0

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    return total 
}

function calculateSum() {
    const input = document.getElementById('numbers').value 

    const inputArray = input.split(',')

    const numbers = []

    for (let i = 0; i < inputArray.length; i++) {
        const number = parseFloat(inputArray[i].trim())

        if (isNaN(number)) {
            document.getElementById('result').innerText = 'Please enter valid numbers!'
            return;
        }

        numbers.push(number)
    }
    const sum = sumOfNumbers(...numbers)

    document.getElementById('result').innerText = `The sum is: ${sum}`

}