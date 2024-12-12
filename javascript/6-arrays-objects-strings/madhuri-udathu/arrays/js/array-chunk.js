function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function handleChunkArray() {
    const arrayInput = document.getElementById('arrayInput').value;
    const chunkSize = parseInt(document.getElementById('chunkSize').value, 10);
    const resultDiv = document.getElementById('result');

    const array = arrayInput.split(',').map(item => item.trim());

    const chunks = chunkArray(array, chunkSize);
    resultDiv.textContent = `Chunks: ${JSON.stringify(chunks)}`;
}