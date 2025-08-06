function getUnicodeValues(str) {
    return Array.from(str).map((char) => char.charCodeAt(0));
}

function displayUnicode() {
    const inputStr = document.getElementById("inputString").value;
    const unicodeValues = getUnicodeValues(inputStr);
    document.getElementById("result").innerText =
        "Unicode Values: " + unicodeValues.join(", ");
}
