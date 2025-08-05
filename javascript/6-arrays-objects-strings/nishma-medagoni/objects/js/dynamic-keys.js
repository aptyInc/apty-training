let dynamicObject = {}

function addToObject() {
    const key = document.getElementById("keyInput").value
    const value = document.getElementById("valueInput").value

    if (key === "" || value === "") {
        document.getElementById("result").innerText = "Please enter both key and value."
        return
    }

    // Add or update the key-value pair in the object
    dynamicObject[key] = value;

    document.getElementById("result").innerText = JSON.stringify(dynamicObject, null, 2);
}
