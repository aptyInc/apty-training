function convertArrayToSentence(wordsArray) {
    let sentence = wordsArray.join(" ");
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1); 
    return sentence;
}


function convertAndDisplay() {
    const inputWords = document.getElementById('inputWords').value;

    const wordsArray = inputWords.split(" "); 

    const sentence = convertArrayToSentence(wordsArray);
    
    document.getElementById('result').textContent = `Converted Sentence: "${sentence}"`;
}