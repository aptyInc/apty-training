function parseJSON(jsonString) {
    try {
        
        let parsedData = JSON.parse(jsonString);
        return { success: true, data: parsedData };
    } catch (error) {
        
        return { 
            success: false, 
            
            message: "Invalid JSON string. Ensure all keys and values are correctly formatted with double quotes.",
            error: error.message 
        };
    }
}


function processJSON() {
    
    let jsonInput = document.getElementById("jsonInput").value;

    
    let result = parseJSON(jsonInput);

    
    if (result.success) {
        document.getElementById("result").innerText = 

            "Parsed JSON:\n" + JSON.stringify(result.data, null, 2);

    } else {
        document.getElementById("result").innerText = 

            `Error: ${result.message}\nDetails: ${result.error}`;

    }
}