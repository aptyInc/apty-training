function chunkArray() {
    const inputArray = document.getElementById("arrayInput").value.split(",").map(Number);
    const chunkSize = parseInt(document.getElementById("chunkSizeInput").value);
    
    if (inputArray.some(isNaN)) {
        document.getElementById("result").innerText = "Please enter valid numbers in the array.";
        return;
    }
    
    let chunkedArray = [];
    
    for (let i = 0; i < inputArray.length; i += chunkSize) {
        chunkedArray.push(inputArray.slice(i, i + chunkSize));
    }
    console.log(chunkedArray)

    document.getElementById("result").innerText = `Chunked Array: ${JSON.stringify(chunkedArray)}`;
}
