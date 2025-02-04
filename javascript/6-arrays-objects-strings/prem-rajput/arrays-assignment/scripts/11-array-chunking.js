function chunkArray() {
    let inputArray = document
        .getElementById("arrayInput")
        .value.split(",")
        .map(Number);
    let chunkSize = parseInt(document.getElementById("chunkInput").value);
    let result = [];
    for (let i = 0; i < inputArray.length; i += chunkSize) {
        result.push(inputArray.slice(i, i + chunkSize));
    }
    document.getElementById("chunkedArray").innerText = JSON.stringify(result);
}
