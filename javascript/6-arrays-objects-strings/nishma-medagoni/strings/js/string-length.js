function getWordLengths() {
    const inputString = document.getElementById('inputString').value;
    const words = inputString.split(' '); // Split the string into words
    const wordLengths = words.map(word => word.length); // Get the length of each word
    const resultString = wordLengths.join(' '); // Join lengths into a string
    document.getElementById('result').innerText = resultString; // Display result
}