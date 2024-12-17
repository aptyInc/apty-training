function wordLengths() {
    const inputString = document.getElementById('inputString').value; 

    if (inputString.trim() === "") {
        document.getElementById('result').textContent = "Please enter a valid sentence!";
        return;
    }

    const words = inputString.split(" ");

    const wordLengths = words.map(word => word.length);

    const resultString = wordLengths.join(" ");

    document.getElementById('result').textContent = `Word lengths: ${resultString}`;
}
