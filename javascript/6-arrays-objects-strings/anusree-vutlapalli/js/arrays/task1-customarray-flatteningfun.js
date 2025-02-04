function customFlatten(arr) {
    let flattenedArray = []; 

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArray = flattenedArray.concat(customFlatten(element));
        } else {
            flattenedArray.push(element);
        }
    });

    return flattenedArray;
}

document.getElementById('flattenArrayBtn').addEventListener('click', function () {
    const inputString = document.getElementById('nestedArrayInput').value.trim(); 
    
    if (!inputString) {
        document.getElementById('result').textContent = "Please enter a valid nested array.";
        return;
    }

    try {
        const nestedArray = JSON.parse(inputString); 
        const flattenedArray = customFlatten(nestedArray); 
        document.getElementById('result').textContent = `Flattened Array: [${flattenedArray.join(', ')}]`;
    } catch (error) {
        document.getElementById('result').textContent = "Invalid input! Please enter a valid nested array.";
    }
});