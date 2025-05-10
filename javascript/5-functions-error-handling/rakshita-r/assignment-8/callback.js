function stringProcessor(input, callback) {
    return callback(input);
}


const toUpperCase = (str = "default string") => {
    return str.toUpperCase();
};


function processaString() {
    const userInput = document.getElementById('userInput').value;
    const processedString = stringProcessor(userInput, toUpperCase);

    
    document.getElementById('result').textContent =
        `Processed String: ${processedString}`;
}