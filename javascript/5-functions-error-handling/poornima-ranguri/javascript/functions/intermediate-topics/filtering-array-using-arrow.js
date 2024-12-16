function onFilteringUsingHighOrderFunction(originalArray, callbackFunction){
    return originalArray.filter(callbackFunction)
}

function onFilterAnArray(){
    const userElement = document.getElementById("userInput");
    const number = parseInt(userElement.value);
    const result = document.getElementById("result");

    const callbackFunction = (eachNum) => eachNum <= number

    const originalArray = [30, 40, 2, 3, 4, 6, 16, 20, 50, 90, 99, 98, 6, 33, 27, 10]

    const filteredArray = onFilteringUsingHighOrderFunction(originalArray, callbackFunction)
    console.log(filteredArray)

    result.innerHTML = "";
    
    result.textContent = `[${filteredArray.join(",  ")}]`

}