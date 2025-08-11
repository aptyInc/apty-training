function getUnicodeValues() {
    const inputString = document.getElementById('inputString').value;

    if (inputString.trim() === "") {
        document.getElementById('result').textContent = "Please enter a valid string.";
        return;
    }

    const unicodeValues = Array.from(inputString).map(char => char.charCodeAt(0));

    document.getElementById('result').textContent = `Unicode values: [${unicodeValues}]`;
}
