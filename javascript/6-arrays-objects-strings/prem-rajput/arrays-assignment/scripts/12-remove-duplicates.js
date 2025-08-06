function removeDuplicates() {
    let inputArray = document
        .getElementById("arrayInput")
        .value.split(",")
        .map(Number);
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (!result.includes(inputArray[i])) {
            result.push(inputArray[i]);
        }
    }
    document.getElementById("uniqueArray").innerText = JSON.stringify(result);
}
