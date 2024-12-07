
function BankAccount() {
 
    let balance = 0;
  

    this.deposit = function (amount) {
      if (amount > 0) {
        balance += amount;
        return `Successfully deposited ₹${amount}.`;
      } else {
        return "Deposit amount must be greater than zero.";
      }
    };
  
 
    this.withdraw = function (amount) {
      if (amount > 0) {
        if (amount <= balance) {
          balance -= amount;
          return `Successfully withdrew ₹${amount}.`;
        } else {
          return "Insufficient balance.";
        }
      } else {
        return "Withdraw amount must be greater than zero.";
      }
    };
  
 
    this.checkBalance = function () {
      return `Current Balance: ₹${balance}`;
    };
  }
  
  
  const myAccount = new BankAccount();
  

  document.getElementById("depositButton").addEventListener("click", () => {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    const message = myAccount.deposit(depositAmount);
    alert(message);
    document.getElementById("depositAmount").value = "";
  });
  
  document.getElementById("withdrawButton").addEventListener("click", () => {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    const message = myAccount.withdraw(withdrawAmount);
    alert(message);
    document.getElementById("withdrawAmount").value = "";
  });
  
  document.getElementById("checkBalanceButton").addEventListener("click", () => {
    const balanceMessage = myAccount.checkBalance();
    document.getElementById("result").innerText = balanceMessage;
  });
  