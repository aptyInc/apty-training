function getFirstAndLastChar() {
    let inputString = document.getElementById("inputString").value;
    if (inputString.length === 0) {
        document.getElementById("output").innerText = "null";
    } else {
        let firstChar = inputString[0];
        let lastChar = inputString[inputString.length - 1];
        document.getElementById("output").innerText =
            firstChar + " " + lastChar;
    }
}
