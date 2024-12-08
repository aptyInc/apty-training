function calculateSum(){
    const userInputElement = document.getElementById("userInput");

    let userInput = userInputElement.value.split(",")
    let userArray = userInput.map(eachElement => parseInt(eachElement))
    let sumOfArray = sum(...userArray)
    document.getElementById("result").textContent = sumOfArray
}


function sum(...args){
    let summing = args.reduce((sum, eachElement) => sum + eachElement, 0)
    return summing
}