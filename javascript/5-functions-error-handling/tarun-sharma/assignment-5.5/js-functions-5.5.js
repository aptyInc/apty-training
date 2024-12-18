function withdrawAmount(balance, amount) {

    if (isNaN(balance) || isNaN(amount)) {

        throw { errorCode: 1001, errorMessage: "Invalid input. Please enter numeric values for balance and withdrawal amount." };
    }

    if (amount > balance) {

        throw { errorCode: 1002, errorMessage: "Insufficient balance. Withdrawal amount exceeds account balance." };
    }

    
    return balance - amount;
}


function performWithdrawal() {
    const balance = parseFloat(document.getElementById("balance").value);

    const withdrawal = parseFloat(document.getElementById("withdrawal").value);

    try {
        
        const remainingBalance = withdrawAmount(balance, withdrawal);
        document.getElementById("result").innerText = `Withdrawal successful! Remaining Balance: ${remainingBalance}`;

    } catch (error) {
        
        document.getElementById("result").innerText = `Error Code: ${error.errorCode}, Message: ${error.errorMessage}`;

    }
    
}