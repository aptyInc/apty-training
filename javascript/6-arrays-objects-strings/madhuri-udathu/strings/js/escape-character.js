function replaceSpecialCharacters(input) {
    return input.replace("n", "\\n").replace("t", "\\t");
}

document.getElementById('processButton').addEventListener('click', () => {
    
    const input = document.getElementById('inputString').value;
    const output = replaceSpecialCharacters(input);

    document.getElementById('output').textContent = output || "Please enter some text.";
});
