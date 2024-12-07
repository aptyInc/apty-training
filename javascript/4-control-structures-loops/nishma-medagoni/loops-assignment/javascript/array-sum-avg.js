function calculateSumAndAverage() {
    const input = document.getElementById('numbers').value 

    const numberStrings = input.split(',')

    let sum = 0
    let isvalid = true 

    for (let i = 0; i < numberStrings.length; i++) {
        let num = parseFloat(numberStrings[i])

        if (isNaN(num)) {
            isvalid = false
            break
        }

        sum = sum + num 
    }

    if(!isvalid) {
        document.getElementById('result').innerText = 'Please enter valid numbers separated by commas.'
        return
    }

    const avg = sum / numberStrings.length

    document.getElementById('result').innerText = `Sum: ${sum}, Average: ${avg}`
}