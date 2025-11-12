const result = document.getElementById("result");

function parseJSON(jsonString) {
    if (!jsonString || typeof jsonString !== "string") {
        return "Invalid parameter: Input must be a non-empty string.";
    }

    try {
        const parsed = JSON.parse(jsonString);
        return parsed;
    } catch (err) {
        return `JSON parsing error: ${err.message}. 
Make sure keys and strings are quoted properly. Example: {"key": "value"}`;
    }
}

function handleParse() {
    const input = document.getElementById("jsonInput").value.trim();
    const output = parseJSON(input);

    if (typeof output === "object") {
        result.textContent = "Valid JSON → Parsed Object: " + JSON.stringify(output);
    } else {
        result.textContent = output; 
    }
}
