function combineArrays() {
    const array1 = JSON.parse(document.getElementById("array1").value);
    const array2 = JSON.parse(document.getElementById("array2").value);
    const combined = [...new Set([...array1, ...array2])];
    document.getElementById("result").innerText = JSON.stringify(combined);
}
