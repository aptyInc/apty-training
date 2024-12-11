function customFlatten(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            // Recursively flatten if the item is an array
            result = result.concat(customFlatten(item));
        } else {
            // Add the non-array item to the result
            result.push(item);
        }
    }
    return result;
}

document.getElementById("flattenButton").addEventListener("click", function () {
    const input = document.getElementById("inputArray").value;
    try {
        // Parse the input as an array
        const nestedArray = JSON.parse(input);
        // Call the customFlatten function
        const flattenedArray = customFlatten(nestedArray);
        document.getElementById("outputResult").textContent = `Flattened Array: [${flattenedArray.join(", ")}]`;
    } catch (error) {
        document.getElementById("outputResult").textContent = "Invalid input. Please enter a valid nested array.";
    }
});