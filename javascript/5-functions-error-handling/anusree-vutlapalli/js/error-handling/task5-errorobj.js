function withdrawAmount() {
    const balanceInput = document.getElementById('balance').value;
    const withdrawInput = document.getElementById('withdraw').value;

    const balance = parseInt(balanceInput, 10);
    const withdrawAmount = parseInt(withdrawInput, 10);

    document.getElementById('result').textContent = "";

    try {
        if (isNaN(balance) || isNaN(withdrawAmount)) {
            throw { errorCode: 400, errorMessage: "Invalid input. Please enter valid numbers." };
        }

        if (withdrawAmount > balance) {
            throw { errorCode: 403, errorMessage: "Insufficient funds for this transaction." };
        }

        const newBalance = balance - withdrawAmount;
        document.getElementById('result').textContent = `Withdrawal successful! Remaining balance: ₹${newBalance}`;
    } catch (error) {
        document.getElementById('result').textContent = `Error [${error.errorCode}]: ${error.errorMessage}`;
    }
}

