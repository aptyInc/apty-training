function onPaddingString(){
    const userInputElement = document.getElementById("userText");
    let userInput = userInputElement.value.trim() //Removing Extra spaces
    let resultOutput = userInput.padStart("10", "0") //padding end
    document.getElementById("result").textContent = resultOutput; //appending length to home 
    
}