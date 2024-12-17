function onReturnResult(){
    const userInputElement = document.getElementById("userText");
    let userInput = userInputElement.value.trim() //Removing Extra spaces
    let userAgeElement = document.getElementById("userAge");
    let userAge = parseInt(userAgeElement.value);



    document.getElementById("result").textContent = `Hello, my name is ${userInput} and I am ${userAge} years old.`; //appending length to home 
    
}