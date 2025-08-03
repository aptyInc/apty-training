document
  .getElementById("withdraw-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const balance = parseFloat(document.getElementById("balance").value);
    const withdrawAmount = parseFloat(
      document.getElementById("withdraw-amount").value
    );
    const output = document.getElementById("withdraw-result");

    try {
      if (withdrawAmount > balance) {
        const error = new Error("Insufficient funds.");
        error.errorCode = 101;
        error.errorMessage = "Withdrawal amount exceeds account balance.";
        throw error;
      }

      output.textContent = `Withdrawal Successful! Remaining Balance: ${
        balance - withdrawAmount
      }`;
    } catch (error) {
      output.textContent = `Error Code: ${error.errorCode}, Message: ${error.errorMessage}`;
    }
  });
