function combineArrays() {
    let array1 = document.getElementById('array1').value.split(',').map(Number);
    let array2 = document.getElementById('array2').value.split(',').map(Number);

    let combinedArray = [...new Set([...array1, ...array2])];

    document.getElementById('result').textContent = combinedArray.join(', ');
}