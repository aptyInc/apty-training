function parseJSON(jsonString) {
    if (typeof jsonString !== 'string') {
        return { success: false, error: 'Input must be a string.' };
    }

    try {
        const parsedData = JSON.parse(jsonString);
        return { success: true, data: parsedData };
    } catch (error) {
        return { success: false, error: 'Invalid JSON string.' };
    }
}

document.getElementById('jsonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const jsonInput = document.getElementById('jsonInput').value;
    const result = parseJSON(jsonInput);

    const resultDiv = document.getElementById('result');
    if (result.success) {
        resultDiv.innerHTML = `<strong>Parsed Data:</strong> ${JSON.stringify(result.data, null, 2)}`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.innerHTML = `<strong>Error:</strong> ${result.error}`;
        resultDiv.style.color = 'red';
    }
});