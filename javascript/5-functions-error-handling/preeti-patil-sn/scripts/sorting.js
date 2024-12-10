function createBankAccount() {
    let balance = 0; 

    return {
      deposit(amount) {
        balance += amount; 
        return `Deposited $${amount}.`;
      },
      withdraw(amount) {
        balance -= amount; 
        return `Withdrew $${amount}.`;
      },
      checkBalance() {
        return `Your current balance is $${balance}.`;
      },
    };
  }

  const myAccount = createBankAccount();

  const amountInput = document.getElementById("amount");
  const output = document.getElementById("output");

  document.getElementById("deposit").addEventListener("click", () => {
    const amount = Number(amountInput.value);
    output.textContent = myAccount.deposit(amount);
    amountInput.value = ""; 
  });

  document.getElementById("withdraw").addEventListener("click", () => {
    const amount = Number(amountInput.value);
    output.textContent = myAccount.withdraw(amount);
    amountInput.value = ""; 
  });

  document.getElementById("check-balance").addEventListener("click", () => {
    output.textContent = myAccount.checkBalance();
  });