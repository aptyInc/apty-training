function removeDuplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function handleRemoveDuplicates() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(',').map(Number);
    document.getElementById("originalArray").textContent = `Original: ${array}`;

    const uniqueArray = removeDuplicates(array);
    document.getElementById("result").textContent = `Without Duplicates: ${uniqueArray}`;
}