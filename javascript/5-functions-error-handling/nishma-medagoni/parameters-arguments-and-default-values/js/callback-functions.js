function callback(input = "DEFAULT VALUE") {
    return input.toUpperCase()
}

function mainFunction(callback) {
    const userInput = document.getElementById("userInput").value.trim()
    const processedText = callback(userInput || undefined)

    document.getElementById("output").innerText = `Processed Text: ${processedText}`
}
