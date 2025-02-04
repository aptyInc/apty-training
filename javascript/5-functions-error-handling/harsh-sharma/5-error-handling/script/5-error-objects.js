function withdrawAmount(balance, withdrawal) {
    if (withdrawal > balance) {
        const error = {
            errorCode: 'INSUFFICIENT_FUNDS',
            errorMessage: 'Withdrawal amount exceeds account balance.'
        };
        throw error;
    }
    return balance - withdrawal;
}

document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const balanceInput = parseFloat(document.getElementById('balance').value);
    const withdrawalInput = parseFloat(document.getElementById('withdrawal').value);
    const resultDiv = document.getElementById('result');

    try {
        const newBalance = withdrawAmount(balanceInput, withdrawalInput);
        resultDiv.innerHTML = `<strong>New Balance:</strong> $${newBalance.toFixed(2)}`;
        resultDiv.style.color = 'green';
    } catch (error) {
        resultDiv.innerHTML = `<strong>Error:</strong> ${error.errorCode} - ${error.errorMessage}`;
        resultDiv.style.color = 'red';
    }
});