function sumOfNumbers() {
    const value = parseFloat(document.getElementById('value').value)
    let sum = 0
    let i = 0

    while(i <= value) {
        sum = sum + i 
        i++
    }
    document.getElementById('result').innerText = `Result: ${sum}`
}