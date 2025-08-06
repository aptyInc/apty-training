function processArray() {
    const numbers = JSON.parse(document.getElementById("numbers").value);
    const result = numbers
        .filter((num) => num % 2 === 0)
        .map((num) => num * 2)
        .reduce((sum, num) => sum + num, 0);
    document.getElementById("result").innerText = result;
}
