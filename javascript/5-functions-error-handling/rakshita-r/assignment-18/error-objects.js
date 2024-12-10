// Function to withdraw amount with error handling
function withdrawAmount(accountBalance, withdrawAmount) {
    // Create a custom error object
    const error = {
      errorCode: 'INSUFFICIENT_FUNDS',
      errorMessage: 'The withdrawal amount exceeds the available balance.',
    };
  
    // Check if withdrawal amount exceeds account balance
    if (withdrawAmount > accountBalance) {
      throw error;  // Throw custom error object if balance is insufficient
    }
  
    // Return the new balance if no error
    return accountBalance - withdrawAmount;
  }
  
  // Function to handle withdrawal request from the user
  function handleWithdrawal() {
    const accountBalance = parseFloat(document.getElementById("account-balance").value);
    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    const resultDiv = document.getElementById("result");
  
    try {
      // Attempt to withdraw amount
      const newBalance = withdrawAmount(accountBalance, withdrawAmount);
      resultDiv.textContent = `Transaction Successful! New Balance: $${newBalance}`;
      resultDiv.style.color = "green";
    } catch (error) {
      // Display the error details
      resultDiv.textContent = `Error Code: ${error.errorCode} - ${error.errorMessage}`;
      resultDiv.style.color = "red";
    }
  }
  