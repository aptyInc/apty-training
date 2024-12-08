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
      if (amount <= 0) {
        throw { errorCode: 101, errorMessage: "Withdraw amount must be greater than zero." };
      }
      if (amount > balance) {
        throw { errorCode: 102, errorMessage: "Insufficient balance." };
      }
      balance -= amount;
      return `Successfully withdrew ₹${amount}.`;
    };
  
    this.checkBalance = function () {
      return `Current Balance: ₹${balance}`;
    };
  }
  
  const myAccount = new BankAccount();
  
  document.getElementById("depositButton").addEventListener("click", () => {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    try {
      const message = myAccount.deposit(depositAmount);
      alert(message);
      document.getElementById("depositAmount").value = "";
    } catch (error) {
      alert(`Error: ${error.errorMessage}`);
    }
  });
  
  document.getElementById("withdrawButton").addEventListener("click", () => {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    try {
      const message = myAccount.withdraw(withdrawAmount);
      alert(message);
    } catch (error) {
      alert(`Error ${error.errorCode}: ${error.errorMessage}`);
    } finally {
      document.getElementById("withdrawAmount").value = "";
    }
  });
  
  document.getElementById("checkBalanceButton").addEventListener("click", () => {
    const balanceMessage = myAccount.checkBalance();
    document.getElementById("result").innerText = balanceMessage;
  });
  