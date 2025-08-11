function removeDuplicates() {
    const arrayInput = document.getElementById("arrayInput").value;
    const array = arrayInput.split(",").map(Number);

    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }

    document.getElementById("result").innerText = "Unique Array: [" + uniqueArray.join(", ") + "]";
}