function onResult(){
    const userInputElement = document.getElementById("userText");
    const userInput = userInputElement.value.trim() //Removing Extra spaces

    const lengthOfString = userInput.length;
    if(userInput === ""){
        document.getElementById("result").textContent = null
    }else{
        let firstCharacter = userInput[0];
        let secondCharacter = userInput.slice(-1) //getting end
        document.getElementById("result").textContent = `${firstCharacter} ${secondCharacter}` //appending to home character 
    }
   
    
}