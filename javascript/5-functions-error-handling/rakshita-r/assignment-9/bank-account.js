function createBankAccount() {
  let balance = 0;

  return function (action, amount = 0) {
    if (action === "deposit") {
      balance += amount;
      return `Deposited: ${amount}. Current Balance: ${balance}`;
    } else if (action === "withdraw") {
      if (amount > balance)
        return `Insufficient funds. Current Balance: ${balance}`;
      balance -= amount;
      return `Withdrew: ${amount}. Current Balance: ${balance}`;
    } else if (action === "check") {
      return `Current Balance: ${balance}`;
    }
  };
}

const account = createBankAccount();

document.getElementById("bankForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById("amount").value);
  const action = document.getElementById("action").value;
  let result = account(action, amount);

  document.getElementById("result").textContent = result;
});
