
 function withdrawAmount(balance, withdrawal) {
    if (withdrawal > balance) {
       
        const error = new Error("Insufficient funds.");
        error.errorCode = 101; 
        error.errorMessage = "Withdrawal amount exceeds account balance.";
        throw error;
    }
    
    return balance - withdrawal;
}

document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const balance = parseFloat(document.getElementById('balance').value);
    const withdrawal = parseFloat(document.getElementById('withdrawAmount').value);

    try {
        const newBalance = withdrawAmount(balance, withdrawal);
        document.getElementById('result').textContent = `Withdrawal successful! New balance: $${newBalance}`;
        event.target[0].value=newBalance;
    } catch (error) {
        document.getElementById('result').textContent = `Error (Code: ${error.errorCode}): ${error.errorMessage}`;
    }
});