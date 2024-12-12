function arrayToSentence(words) {
    let sentence = words.join(' ');
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    return sentence;
}

function convertInputToSentence() {
    const input = document.getElementById('wordInput').value;
    const wordsArray = input.split(',');
    const trimmedWords = wordsArray.map(word => word.trim());
    const sentence = arrayToSentence(trimmedWords);
    document.getElementById('result').textContent = sentence;
}
