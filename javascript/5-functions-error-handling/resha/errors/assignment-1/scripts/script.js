const output = document.getElementById('output');

function parseJSON(str) {
    if(!str.trim()) {
        output.innerText = "Please enter a valid JSON string.";
        return;
    }

    try {
        const parsed = JSON.parse(str);        
        output.innerText = `Valid String: ${JSON.stringify(parsed, null, 2)}`;
    } catch (error) {
        output.innerText = `Error: ${error.message}.\nPlease check your format and try again.`;
    }
}

function getValues() {
    const str = document.getElementById('str').value;
    parseJSON(str);
}