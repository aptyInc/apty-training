function countCharacterFrequency() {
    const inputString = document.getElementById('string').value;
    const resultDiv = document.getElementById('result');
    
    if (!inputString) {
        resultDiv.innerHTML = "Please enter a string.";
        return;
    }

    const charCount = {};

    // Count frequency of each character using for-in loop
    for (const char of inputString) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Display the result
    let result = "<h2>Character Frequencies:</h2><ul>";
    for (const char in charCount) {
        result += `<li>${char}: ${charCount[char]}</li>`;
    }
    result += "</ul>";

    resultDiv.innerHTML = result;
}
