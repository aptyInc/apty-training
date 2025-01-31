function parseJSON() {
    const input = document.getElementById('jsonInput').value;
    let result;

    try {
        
        result = JSON.parse(input);
        console.log(typeof result);
        document.getElementById('result').innerHTML = `Parsed successfully: <pre>${JSON.stringify(result, null, 2)}</pre>`;
    } catch (error) {
       
        document.getElementById('result').innerHTML = `Invalid JSON: ${error.message}`;
    }
}