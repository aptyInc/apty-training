function stringProcessor(input, callback) {
    return callback(input);
}

// Callback function to process the string
const toUpperCase = (str = "default string") => {
    return str.toUpperCase();
};

// Main function to process user input
function processString() {
    const userInput = document.getElementById('userInput').value;
    const processedString = stringProcessor(userInput, toUpperCase);

    // Display the result
    document.getElementById('result').textContent =
        `Processed String: ${processedString}`;
}