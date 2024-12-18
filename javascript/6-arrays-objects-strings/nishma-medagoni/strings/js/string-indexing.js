function getFirstAndLastCharacter() {
    const inputString = document.getElementById('inputString').value;
    if (inputString === "") {
        document.getElementById('result').innerText = "null"; 
    } else {
        const firstChar = inputString[0]; 
        const lastChar = inputString[inputString.length - 1]; 
        document.getElementById('result').innerText = firstChar + " " + lastChar; 
    }
}