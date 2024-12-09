function displayResult(userInput, changeToUpperCase){
    console.log(changeToUpperCase(userInput))
    document.getElementById("result").textContent = changeToUpperCase(userInput)
}


function onUppercase(){
    const userInputElement = document.getElementById("userInput")
    const userInput = userInputElement.value;
    const changeToUpperCase = (text="poornima ranguri") => {
        return text.toUpperCase()
    }

    displayResult(userInput || "poornima ranguri", changeToUpperCase)

    
}


