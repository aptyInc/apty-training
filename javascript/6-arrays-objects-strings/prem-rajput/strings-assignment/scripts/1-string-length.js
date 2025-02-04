function calculateWordLengths() {
    let inputText = document.getElementById("inputText").value;
    let words = inputText.split(" ");
    let wordLengths = words.map((word) => word.length);
    let result = wordLengths.join(" ");
    document.getElementById("output").innerText = result;
}
