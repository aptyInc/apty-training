function withdrawAmount() {
            
    let balance = parseFloat(document.getElementById('balance').value);
    let withdrawalAmount = parseFloat(document.getElementById('withdrawalAmount').value);
    let result = document.getElementById('result');

    try {
        
        if (withdrawalAmount > balance) {
            
            let error = new Error("Insufficient funds.");
            error.errorCode = "INSUFFICIENT_FUNDS";
            error.errorMessage = "You do not have enough funds to complete this transaction.";
            throw error; 
        }

        
        balance -= withdrawalAmount;
        result.textContent = `Transaction successful! New balance: $${balance.toFixed(2)}`;

    } catch (error) {
        
        result.textContent = `Error [${error.errorCode}]: ${error.errorMessage}`;
    }
}