const bankAccount = () => {
  let balance = 0;

  return {
    deposit: (amount) => {
      if (amount > 0) {
        balance += amount;
        return `Deposited: ${amount}`;
      } else {
        return `Invalid amount.`;
      }
    },
    withdraw: (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrawn: ${amount}`;
      } else {
        return `Invalid amount or insufficient balance.`;
      }
    },
    checkBalance: () => `Balance: ${balance}`,
  };
};

const account = bankAccount();

document.getElementById("deposit").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value) || 0;
  document.getElementById("balance-output").textContent =
    account.deposit(amount);
});

document.getElementById("withdraw").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value) || 0;
  document.getElementById("balance-output").textContent =
    account.withdraw(amount);
});

document.getElementById("check-balance").addEventListener("click", () => {
  document.getElementById("balance-output").textContent =
    account.checkBalance();
});
