function showFirstAndLast() {
    const inputString = document.getElementById('inputString').value;

    if (!inputString) {
        document.getElementById('result').textContent = "Please enter a valid string!";
        return;
    }

    const firstChar = inputString[0];
    const lastChar = inputString[inputString.length - 1];

    document.getElementById('result').textContent = `First: ${firstChar}, Last: ${lastChar}`;
}