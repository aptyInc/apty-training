function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function cloneObject() {
    const originalObjectInput = document.getElementById("originalObject").value;

    try {
        const originalObject = JSON.parse(originalObjectInput);
        const clonedObject = deepClone(originalObject);

        // Display both objects
        document.getElementById("originalResult").textContent = JSON.stringify(originalObject);
        document.getElementById("clonedResult").textContent = JSON.stringify(clonedObject);

        // Example modification of the cloned object
        clonedObject.example = "Modified!";
        console.log("Cloned Object Modified:", clonedObject);
        console.log("Original Object Unchanged:", originalObject);
    } catch (error) {
        alert("Invalid JSON! Please enter a valid nested object.");
    }
}