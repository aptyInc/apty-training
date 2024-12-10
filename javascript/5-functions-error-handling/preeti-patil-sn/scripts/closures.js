function createBankAccount() {
    let balance = 0;
  
    return {
      deposit(amount) {
        balance += amount;
        return `Deposited: ${amount}. New Balance: ${balance}`;
      },
      withdraw(amount) {
        balance -= amount;
        return `Withdrew: ${amount}. Remaining Balance: ${balance}`;
      },
      checkBalance() {
        return `Current Balance: ${balance}`;
      }
    };
  }
  
  const bankAccount = createBankAccount();
  
  const amountInput = document.getElementById("amountInput");
  const output = document.getElementById("output");
  
  document.getElementById("depositButton").addEventListener("click", function () {
    const amount = parseFloat(amountInput.value); 
    const result = bankAccount.deposit(amount); 
    output.textContent = result;
  });
  
  document.getElementById("withdrawButton").addEventListener("click", function () {
    const amount = parseFloat(amountInput.value); 
    const result = bankAccount.withdraw(amount); 
    output.textContent = result;
  });
  
  document.getElementById("checkBalanceButton").addEventListener("click", function () {
    const result = bankAccount.checkBalance(); 
    output.textContent = result;
  });
  