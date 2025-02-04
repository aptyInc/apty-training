function sortString() {
    // Get the input string from the HTML
    const inputString = document.getElementById('stringInput').value.trim();

    // Check if the input is empty
    if (!inputString) {
        document.getElementById('result').innerText = "Please enter a valid string.";
        return;
    }

    // Sort the characters in the string alphabetically
    const sortedString = inputString.split('').sort().join('');

    // Display the result
    document.getElementById('result').innerText = `Sorted String: ${sortedString}`;
}