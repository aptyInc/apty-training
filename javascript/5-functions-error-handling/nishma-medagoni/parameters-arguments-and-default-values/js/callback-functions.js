function callback(text = ' ') {
    return text.toUpperCase()
}

function processText(callback) {
    const inputText = document.getElementById('inputText').value 

    if (inputText.trim() === '') {
        document.getElementById('result').innerText = 'Please enter some text.'
        return
    }

    const resultText = callback(inputText)

    document.getElementById('result').innerText = `Processed Text: ${resultText}`
}