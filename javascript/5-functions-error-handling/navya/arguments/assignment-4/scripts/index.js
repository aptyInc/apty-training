const result = document.getElementById("result");


function upperCaseCallback(text = "default text") {
    return text.toUpperCase();
}


function applyProcessor(input, callbackFn) {
    return callbackFn(input);
}

function processText() {
    const raw = document.getElementById("userInput").value.trim();


    const output = applyProcessor(raw || undefined, upperCaseCallback);

    result.textContent = `Processed Text: ${output}`;
}
