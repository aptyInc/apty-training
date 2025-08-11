
function processUserInput(word, callbackFun = (text = 'default value') => text.toUpperCase()) {
    const uppercaseWordIs = callbackFun(word);
    document.getElementById('result').innerText = uppercaseWordIs;
}


const uppercaseWord = document.getElementById('form').addEventListener('submit', (evt) => {

    evt.preventDefault();
    const userInput = document.getElementById('word').value.trim();
    processUserInput(userInput || undefined);
})



