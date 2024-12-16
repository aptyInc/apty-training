function repeatAction(actionToBeDone, number){
    for(let i = 1; i < number + 1; i++){
        actionToBeDone(i)
    }

}


function onPerformingHighOrderFunction(){
    const userInputElement = document.getElementById("userInput").value;
    const number = parseInt(userInputElement)
    const resultElement = document.getElementById("result");

    
    function taskToBePerform(currentOne){
        
        let listElement = document.createElement("li");
        listElement.textContent = `Repeatitive Task with High Order Function ${currentOne}`;
        listElement.style.marginTop = "20px"
        listElement.style.padding = "20px"
        listElement.style.borderRadius = "30px"
        listElement.style.boxShadow = "0px 4px 16px 2px #bfbfbf"; 
        resultElement.appendChild(listElement)
    }

    repeatAction(taskToBePerform, number)

}