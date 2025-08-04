function withdrawAmount(balance, amount) {
  if (amount > balance) {
    throw {
      errorCode: 101,
      errorMessage: "Insufficient funds. Withdrawal exceeds balance.",
    };
  }
  return balance - amount;
}

function withdraw() {
  const balanceInput = document.getElementById("balance").value;
  const amountInput = document.getElementById("amount").value;
  const result = document.getElementById("result");

  const balance = Number(balanceInput);
  const amount = Number(amountInput);

  try {
    const newBalance = withdrawAmount(balance, amount);
    result.innerText = `Withdrawal successful! Remaining Balance: ₹${newBalance}`;
  } catch (error) {
    result.innerText = `Error ${error.errorCode}: ${error.errorMessage}`;
  }
}
