 function withdrawAmount(balance, withdrawal) {
    try {
      if (withdrawal > balance) {
        throw {
          errorCode: 101,
          errorMessage: "Insufficient balance for the withdrawal.",
        };
      }
      return `Withdrawal successful! Remaining balance: ${
        balance - withdrawal
      }`;
    } catch (error) {
      return `Error ${error.errorCode}: ${error.errorMessage}`;
    }
  }

  document
    .getElementById("withdrawButton")
    .addEventListener("click", function () {
      const balance = parseFloat(
        document.getElementById("balanceInput").value
      );
      const withdrawal = parseFloat(
        document.getElementById("withdrawalInput").value
      );
      const result = withdrawAmount(balance, withdrawal);
      document.getElementById("output").textContent = result; 
    });