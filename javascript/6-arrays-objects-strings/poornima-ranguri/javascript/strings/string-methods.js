function onSortingString(){
    const userInputElement = document.getElementById("userText");
    let userInput = userInputElement.value.trim() //Removing Extra spaces
    let sortedString = userInput.split("").sort().join("")

    document.getElementById("result").textContent = sortedString; //appending length to home 
    
}