function padString() {
    const inputString = document.getElementById('inputString').value;

    const paddedString = inputString.padStart(10, '0');

    document.getElementById('result').textContent = `Padded String: ${paddedString}`;
}
