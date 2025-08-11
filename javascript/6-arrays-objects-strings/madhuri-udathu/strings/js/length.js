function calculateWordLengths() {
    const input = document.getElementById('inputString').value;
    const wordLengths = input.split(' ').map(w => w.length).join(' ');

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = wordLengths;
}