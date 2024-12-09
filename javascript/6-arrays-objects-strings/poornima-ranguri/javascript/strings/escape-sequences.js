function onPerformAction(){
    const userInputElement = document.getElementById("userText");
    let userInput = userInputElement.value.trim() //Removing Extra spaces
    let replacedString = userInput.replace(/\n/g, "\\n");
    let resultString = replacedString.replace(/\t/g, "\\t");
    document.getElementById("result").textContent = resultString; //appending length to home 
    
}