function getUnicodeValues(){
    const userInputElement = document.getElementById("userText");
    let userInput = userInputElement.value.trim() //Removing Extra spaces
    let userInputArray = userInput.split("");
    let resultArray = []
    for(let letter of userInputArray){
            resultArray.push(letter.charCodeAt())
    }



    document.getElementById("result").textContent = `[${resultArray}]`; //appending length to home 
    
}