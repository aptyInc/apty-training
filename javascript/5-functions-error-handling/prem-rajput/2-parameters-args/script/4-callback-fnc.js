function processString(input, callback = (str) => str.toUpperCase()) {
    return callback(input);
}

function processInput(event) {

    event.preventDefault();

    const userInput = document.getElementById("inputText").value || "default value";
    const result = processString(userInput);

    document.getElementById("result").innerText = `Processed String: ${result}`;

}
