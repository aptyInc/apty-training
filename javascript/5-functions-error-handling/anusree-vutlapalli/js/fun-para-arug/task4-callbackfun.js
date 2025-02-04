function processInput() {
    var userInput = document.getElementById('inputText').value || "Default Text";
    var processedText = convertToUppercase(userInput);

    document.getElementById('result').textContent = processedText;
}

function convertToUppercase(str) {
    return str.toUpperCase();
}
