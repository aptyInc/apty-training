function getUnicodeValues(input) {
    // Split the string into characters, map each to its Unicode value
    return input.split('').map(char => char.charCodeAt(0));
}

document.getElementById("generateButton").addEventListener("click", function () {
    const inputString = document.getElementById("inputString").value;
    const unicodeValues = getUnicodeValues(inputString);
    if (inputString === "") {
        document.getElementById("output").textContent = "Please enter a string.";
    } else {
        document.getElementById("output").textContent = `Unicode Values: [${unicodeValues.join(", ")}]`;
    }
});  