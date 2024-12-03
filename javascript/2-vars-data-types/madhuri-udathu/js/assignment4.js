let obj = { toString: () => "Hello" };
console.log(String(obj)); // "Hello"

function handleClick(element) {
    // Get the ID of the clicked paragraph
    var paragraphId = element;

    // Get the original type of the paragraph ID
    const originalType = typeof paragraphId;

    var outputText = '';

    if (paragraphId == "para1") {
        // Convert to String
        var stringValue = String(paragraphId);   
        outputText = `
            <strong>Paragraph ID:</strong> ${paragraphId} <br>
            <strong>Original Type:</strong> ${originalType} <br>
            <strong>Converted to String:</strong> ${stringValue} (Type: ${typeof stringValue})
        `;
    } else if (paragraphId == "para2") {
        // Convert to Boolean
        var booleanValue = Boolean(paragraphId);  
        outputText = `
            <strong>Paragraph ID:</strong> ${paragraphId} <br>
            <strong>Original Type:</strong> ${originalType} <br>
            <strong>Converted to Boolean:</strong> ${booleanValue} (Type: ${typeof booleanValue})
        `;
    } else if (paragraphId == "para3") {
        // Convert to Number
        var numberValue = Number(paragraphId);   
        outputText = `
            <strong>Paragraph ID:</strong> ${paragraphId} <br>
            <strong>Original Type:</strong> ${originalType} <br>
            <strong>Converted to Number:</strong> ${numberValue} (Type: ${typeof numberValue})
        `;
    }

    // Display the results in the output paragraph
    document.getElementById("output").innerHTML = outputText;
    
}
document.getElementById("para1").onclick = function() { handleClick("para1"); };
document.getElementById("para2").onclick = function() { handleClick("para2"); };
document.getElementById("para3").onclick = function() { handleClick("para3"); };