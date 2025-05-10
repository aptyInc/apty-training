function customFlatten(arr) {
    let result = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(customFlatten(element));
        } else {
            result.push(element);
        }
    }
    return result;
}

function flattenArray() {
    const input = document.getElementById("arrayInput").value;
    try {
        const nestedArray = JSON.parse(input);
        const flattenedArray = customFlatten(nestedArray);
        document.getElementById("result").textContent = `Flattened Array: ${flattenedArray}`;
    } catch (error) {
        document.getElementById("result").textContent ="Invalid input. Please enter a valid nested array.";
    }
}
