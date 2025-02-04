function replaceEscapeSequences() {
    const inputString = document.getElementById('inputString').value;
    const resultString = inputString.replace(/\n/g, '\\n').replace(/\t/g, '\\t')
    document.getElementById('result').innerText = resultString;
}