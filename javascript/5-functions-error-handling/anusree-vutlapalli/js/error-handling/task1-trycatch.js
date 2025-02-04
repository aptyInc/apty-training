function parseJSON() {
    var jsonString = document.getElementById('jsonInput').value;  // Get user input

    try {
        var parsedData = JSON.parse(jsonString);  // Try parsing the JSON string
        document.getElementById('result').textContent = 'Parsed JSON: ' + JSON.stringify(parsedData);  // Display parsed data
    } catch (error) {
        document.getElementById('result').textContent = "Invalid JSON format. Please check your input.";  // Error message if invalid
    }
}