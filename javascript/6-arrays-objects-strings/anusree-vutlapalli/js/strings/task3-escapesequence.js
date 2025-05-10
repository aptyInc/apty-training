function convertEscapeSequences() {
    const inputString = document.getElementById('inputString').value;
    
    if (!inputString.trim()) {
        document.getElementById('result').textContent = "Please enter a valid string!";
        return;
    }
    
    // Explicitly handle both \n and \t
    const escapedString = inputString
        .replace(/\n/g, '\\n')
        .replace(/\t/g, '\\t');
    
    document.getElementById('result').textContent = `Converted String: ${escapedString}`;
}
