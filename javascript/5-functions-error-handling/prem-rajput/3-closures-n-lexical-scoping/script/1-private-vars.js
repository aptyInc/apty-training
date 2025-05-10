function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited: ${amount}. New Balance: ${balance}`;
      } else {
        return "Deposit amount must be positive.";
      }
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds.";
      } else if (amount > 0) {
        balance -= amount;
        return `Withdrawn: ${amount}. New Balance: ${balance}`;
      } else {
        return "Withdrawal amount must be positive.";
      }
    },
    checkBalance() {
      return `Current Balance: ${balance}`;
    },
  };
}

const myAccount = createBankAccount();

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const result = myAccount.deposit(amount);
  document.getElementById("result").innerText = result;
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  const result = myAccount.withdraw(amount);
  document.getElementById("result").innerText = result;
}

function checkBalance() {
  const result = myAccount.checkBalance();
  document.getElementById("result").innerText = result;
}
