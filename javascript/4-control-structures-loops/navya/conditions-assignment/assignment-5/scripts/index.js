const resultBox = document.getElementById("resultBox");

function checkOddEven() {
    const num = Number(document.getElementById("numInput").value);

    if (isNaN(num)) {
        resultBox.textContent = "Please enter a valid number!";
        return;
    }

    const answer = (num % 2 === 0) ? "Even" : "Odd";

    resultBox.textContent = `The number is: ${answer}`;
}
