function joinWordsToSentence(wordsArray) {
    if (!Array.isArray(wordsArray) || wordsArray.length === 0) {
        return "Please provide a non-empty array of words.";
    }
    
    let sentence = wordsArray.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}


function convertArrayToSentence() {
    const input = document.getElementById("wordArrayInput").value;
    if (input.trim() === "") {
        document.getElementById("result").innerText = "Please enter a valid array.";
        return;
    }

    try {
        const wordsArray = JSON.parse(input);
        if (!Array.isArray(wordsArray)) {
            throw new Error("Invalid input");
        }
        const sentence = joinWordsToSentence(wordsArray);
        document.getElementById("result").innerText = `Sentence: ${sentence}`;
    } catch (error) {
        document.getElementById("result").innerText = "Invalid input. Enter a valid JSON array of words.";
    }
}
