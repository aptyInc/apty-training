function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj)); 
}

function processObject() {
    let input = document.getElementById('userInput').value;
    let key = document.getElementById('modifyKey').value;
    let value = document.getElementById('modifyValue').value;

    try {
        // Convert user input into an object
        let originalObj = JSON.parse(input);

        // Deep clone the object
        let clonedObj = deepClone(originalObj);

        // Update the clone with the new value
        clonedObj[key] = value;

        // Show the results
        document.getElementById("output").textContent = `
          Original Object: ${JSON.stringify(originalObj, null, 2)}
          Cloned Object: ${JSON.stringify(clonedObj, null, 2)}
        `;
    } catch (error) {
        document.getElementById("output").textContent = "Invalid JSON input!";
    }
}
