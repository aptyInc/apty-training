function withdrawAmount(balance, withdrawal) {
    if (withdrawal > balance) {
        const error = {
        errorCode: 101,
        errorMessage: "Insufficient funds. Withdrawal amount exceeds balance.",
        };
        throw error;
    }
    return balance - withdrawal;
}

function handleWithdrawal() {
    const balance = parseFloat(document.getElementById("balance").value.trim());
    const withdrawal = parseFloat(
        document.getElementById("withdrawal").value.trim()
    );
    const resultElement = document.getElementById("result");

    try {
        const remainingBalance = withdrawAmount(balance, withdrawal);
        resultElement.style.color = "green";
        resultElement.textContent = `Withdrawal successful! Remaining Balance: $${remainingBalance.toFixed(2)}`;
    } catch (error) {
        resultElement.style.color = "red";
        resultElement.textContent = `Error ${error.errorCode}: ${error.errorMessage}`;
    }
}
