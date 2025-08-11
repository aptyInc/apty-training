function callbackFunc(callback = (input) => input.toUpperCase()) {
    const userInput = document.getElementById("userInput").value || "default text";
    const processedText = callback(userInput); // Use callback function to process input
    document.getElementById("result").innerText = `Processed Text: ${processedText}`;
}
