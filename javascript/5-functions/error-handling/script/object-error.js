// Function to simulate withdrawal with error handling
function withdrawAmount(balance, amount) {
    if (isNaN(balance) || isNaN(amount)) {
        throw {
            errorCode: 400,
            errorMessage: "Invalid input. Both balance and withdrawal amount must be numbers."
        };
    }

    if (amount > balance) {
        throw {
            errorCode: 403,
            errorMessage: "Insufficient funds. The withdrawal amount exceeds the available balance."
        };
    }

    const newBalance = balance - amount;
    return newBalance;
}


document.getElementById('form').addEventListener('submit', (evt) => {
    evt.preventDefault();

    const balance = parseFloat(document.getElementById("balance").value);
    const amount = parseFloat(document.getElementById("amount").value);
    const outputElement = document.getElementById("result");

    try {
        const newBalance = withdrawAmount(balance, amount);
        outputElement.innerText = `Withdrawal successful. New balance: $${newBalance.toFixed(2)}`;
        outputElement.style.color = "green";
    } catch (error) {
        outputElement.innerText = `Error (${error.errorCode}): ${error.errorMessage}`;
        outputElement.style.color = "red";
    }
})
