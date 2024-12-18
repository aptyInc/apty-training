function getUnicodeValues(input) {
    let unicodeArray = [];
    for (let i = 0; i < input.length; i++) {
        unicodeArray.push(input.charCodeAt(i));
    }
    return unicodeArray;
}

function processInput() {
    const inputString = document.getElementById('inputString').value;
    const unicodeValues = getUnicodeValues(inputString);
    document.getElementById('unicodeResult').innerText = JSON.stringify(unicodeValues);
}