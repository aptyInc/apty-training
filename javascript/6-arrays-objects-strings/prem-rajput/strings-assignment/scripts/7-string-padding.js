function padStringWithZeros(str) {
    return str.padStart(10, "0");
}

function padString() {
    const inputStr = document.getElementById("inputString").value;
    const paddedStr = padStringWithZeros(inputStr);
    document.getElementById("result").innerText = "Padded String: " + paddedStr;
}
