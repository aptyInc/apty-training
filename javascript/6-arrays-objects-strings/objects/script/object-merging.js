

function deepMerge(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (
                typeof obj2[key] === 'object' &&
                obj2[key] !== null &&
                !Array.isArray(obj2[key])
            ) {
                result[key] = deepMerge(result[key] || {}, obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }

    return result;
}

function displayOutput(message) {
    document.getElementById("output").textContent = message;
}


document.getElementById("mergeObjects").addEventListener("click", () => {
    const obj1Input = document.getElementById("object1").value;
    const obj2Input = document.getElementById("object2").value;

    try {
        const obj1 = JSON.parse(obj1Input);
        const obj2 = JSON.parse(obj2Input);

        const mergedObject = deepMerge(obj1, obj2);

        displayOutput(JSON.stringify(mergedObject, null, 2));
    } catch (error) {
        displayOutput("Invalid JSON input. Please enter valid JSON for both objects.");
    }
});
