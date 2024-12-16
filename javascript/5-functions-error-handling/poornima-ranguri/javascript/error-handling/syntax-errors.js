function parseJSON(jsonString){
    try{
        const parsedData = JSON.parse(jsonString)
        return{
            success: true,
            data: parsedData
        }
    }catch(error){
        let errorMessage = "Invalid JSON format";

        

        return {
            success: false,
            message: errorMessage,
            errorDetails: `error.message, Must be enclosed {"name":"poori"}`
        }
    }
}


function onHandlingErrors(){
    let userInputElement = document.getElementById("userInput")
    let resultElement = document.getElementById("result")
    let userInput = userInputElement.value;
    const parseResult = parseJSON(userInput)
    if (parseResult.success) {
        resultElement.textContent = `Parsed Data: ${JSON.stringify(parseResult.data, null, 2)}`;
        resultElement.style.color = "green";
      } else {
        resultElement.textContent = `Error: ${parseResult.message} (${parseResult.errorDetails})`;
        resultElement.style.color = "red";
      }
}