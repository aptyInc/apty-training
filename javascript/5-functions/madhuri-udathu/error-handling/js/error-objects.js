function withdrawAmount(balance, withdrawal) {
    if (withdrawal > balance) {
        throw {
            errorCode: 101,
            errorMessage: `Insufficient funds. You tried to withdraw ${withdrawal}, but your balance is ${balance}.`
        };
    }
    return balance - withdrawal;
}

function handleWithdrawal() {
    const balance = parseFloat(document.getElementById('balance').value);
    const withdrawal = parseFloat(document.getElementById('withdrawal').value);
    const resultElement = document.getElementById('result');

    try {
        if (isNaN(balance) || isNaN(withdrawal)) {
            throw { errorCode: 102, errorMessage: "Please enter valid numeric values." };
        }

        const newBalance = withdrawAmount(balance, withdrawal);
        resultElement.innerHTML = `<span class="success">Withdrawal successful! New balance: ${newBalance}</span>`;
    } 
    catch (error) {
        resultElement.innerHTML = `<span class="error">Error ${error.errorCode}: ${error.errorMessage}</span>`;
    }
}