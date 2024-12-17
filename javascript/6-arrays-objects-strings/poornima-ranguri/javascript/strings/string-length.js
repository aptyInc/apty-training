function onCalculateLength(){
    const userInputElement = document.getElementById("userText");
    const userInput = userInputElement.value.trim() //Removing Extra spaces

    const userInputArray = userInput.split(" ");
    let resultArray = []
    for(let word of userInputArray){
        resultArray.push(word.length)
    }

    document.getElementById("result").textContent = `"${resultArray.join(" ")}"` //appending length to home 
    
}