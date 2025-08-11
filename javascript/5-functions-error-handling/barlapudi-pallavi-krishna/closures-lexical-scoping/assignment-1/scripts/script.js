function createBankAccount() {
  let balance = 0;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited ₹${amount}.`;
      } else {
        return "Enter a valid deposit amount.";
      }
    },
    withdraw: function (amount) {
      if (isNaN(amount)||amount <= 0) return "Enter a valid withdrawal amount.";
      if (amount > balance) return "Insufficient balance.";
      balance -= amount;
      return `Withdrew ₹${amount}.`;
    },
    getBalance: function () {
      return `Current Balance: ₹${balance}`;
    },
  };
}

const myAccount = createBankAccount();

function getInputAmount() {
  return parseFloat(document.getElementById("amountInput").value);
}

function depositMoney() {
  const amount = getInputAmount();
  const message = myAccount.deposit(amount);
  document.getElementById("message").innerText = message;
}

function withdrawMoney() {
  const amount = getInputAmount();
  const message = myAccount.withdraw(amount);
  document.getElementById("message").innerText = message;
}

function showBalance() {
  const message = myAccount.getBalance();
  document.getElementById("message").innerText = message;
}
