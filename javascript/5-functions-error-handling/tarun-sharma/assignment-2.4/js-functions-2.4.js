function processText(input, callback = text => text.toUpperCase()) {

    return callback(input);
    
}


function processInput() {

    let text = document.getElementById("userInput").value || "default text";
    let result = processText(text); 

    document.getElementById("result").innerText = result;

}