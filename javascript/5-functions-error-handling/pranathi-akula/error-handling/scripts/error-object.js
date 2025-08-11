function withdrawAmount(accountBalance, withdrawalAmount) {
    try {
      accountBalance = parseFloat(accountBalance);
      withdrawalAmount = parseFloat(withdrawalAmount);
  
      if (isNaN(accountBalance) || isNaN(withdrawalAmount)) {
        throw { errorCode: 400, errorMessage: "Invalid input. Both values must be numbers." };
      }
  
      if (withdrawalAmount > accountBalance) {
        throw {
          errorCode: 402,
          errorMessage: "Insufficient funds. The withdrawal amount exceeds the balance."
        };
      }
  
      if (withdrawalAmount <= 0) {
        throw { errorCode: 403, errorMessage: "Invalid withdrawal amount. Must be greater than zero." };
      }

      const newBalance = accountBalance - withdrawalAmount;
      return `Withdrawal successful! New balance: ${newBalance.toFixed(2)}`;
    } catch (error) {
      return `Error [Code ${error.errorCode}]: ${error.errorMessage}`;
    }
  }
  
  function performWithdrawal() {
    const balance = document.getElementById("balance").value;
    const withdrawal = document.getElementById("withdraw").value;
    const resultElement = document.getElementById("result");
    const result = withdrawAmount(balance, withdrawal);
    resultElement.textContent = result;
  }
  