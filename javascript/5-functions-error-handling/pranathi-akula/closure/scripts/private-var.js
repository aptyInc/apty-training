function createbankaccount() {
  let balance = 0;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited $${amount}. New balance: $${balance}`;
      } else {
        return "Deposit amount must be greater than 0.";
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. New balance: $${balance}`;
      } else if (amount > balance) {
        return "Insufficient funds.";
      } else {
        return "Withdrawal amount must be greater than 0.";
      }
    },
    checkBalance() {
      return `Current balance: $${balance}`;
    },
  };
}

const myAccount = createbankaccount();

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("message").innerText =
      "Please enter a valid deposit amount.";
  } else {
    document.getElementById("message").innerText = myAccount.deposit(amount);
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("message").innerText =
      "Please enter a valid withdrawal amount.";
  } else {
    document.getElementById("message").innerText = myAccount.withdraw(amount);
  }
}

function checkBalance() {
  document.getElementById("message").innerText = myAccount.checkBalance();
}
