function padString(input, length) {
    let padding = '';
    const numOfZeros = length - input.length;

    for (let i = 0; i < numOfZeros; i++) {
        padding += '0';
    }

    return padding + input;
}

function processInput() {
    const input = document.getElementById('inputString').value;
    const paddedResult = padString(input, 10);  
    document.getElementById('paddedResult').innerText = paddedResult;
}
