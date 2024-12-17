function parseJSON() {
    const jsonInput = document.getElementById('jsonInput').value;
    const resultElement = document.getElementById('result');

    try {
        // Attempt to parse the JSON string
        const parsedData = JSON.parse(jsonInput);
        resultElement.textContent = `Parsed JSON: ${JSON.stringify(parsedData, null, 2)}`;
    } catch (error) {
        // Handle invalid JSON cases
        resultElement.textContent = `Error: Invalid JSON format. Details: ${error.message}`;
    }
}