function combineArrays() {
    // Get the values from input fields
    const array1 = document.getElementById('array1').value.split(',').map(item => Number(item.trim()));
    const array2 = document.getElementById('array2').value.split(',').map(item => Number(item.trim()));

    // Combine arrays using the spread operator and remove duplicates with Set
    const combined = [...new Set([...array1, ...array2])];

    // Display the result
    document.getElementById('result').innerText = `Combined Array Without Duplicates: [${combined.join(', ')}]`;
}