const result = document.getElementById("result");

function withdrawAmount(balance, amount) {
    if (amount > balance) {
        throw {
            errorCode: 101,
            errorMessage: "Withdrawal amount exceeds available balance."
        };
    }

    return balance - amount;
}

function handleWithdraw() {
    const bal = Number(document.getElementById("balanceInput").value);
    const amt = Number(document.getElementById("withdrawInput").value);

    if (isNaN(bal) || isNaN(amt)) {
        result.textContent = "Please enter valid numbers for both fields.";
        return;
    }

    try {
        const updatedBalance = withdrawAmount(bal, amt);
        result.textContent = `Withdrawal successful! New Balance: ₹${updatedBalance}`;
    } catch (err) {
        result.textContent = `Error ${err.errorCode}: ${err.errorMessage}`;
    }
}
