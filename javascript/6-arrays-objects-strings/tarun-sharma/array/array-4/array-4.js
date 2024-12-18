function wordsToSentence(words) {
    var sentence = words.join(" ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function convertArrayToSentence() {
    var input = ["apty", "is", "an", "product based company"];
    var output = wordsToSentence(input);
    document.getElementById("result").innerText = output;
}
