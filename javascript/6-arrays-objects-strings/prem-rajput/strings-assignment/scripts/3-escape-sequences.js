function replaceEscapeSequences() {
    let inputString = document.getElementById("inputString").value;
    let result = inputString.replace(/\\n/g, "\\\\n").replace(/\\t/g, "\\\\t");
    document.getElementById("output").innerText = result;
}
