  
   function createBankAccount() {
    let balance = 0;

    function deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than 0.";
        }
        balance += amount;
        return `Deposited: $${amount}`;
    }

   
    function withdraw(amount) {
        if (amount <= 0) {
            return "Withdrawal amount must be greater than 0.";
        }
        if (amount > balance) {
            return "Insufficient funds.";
        }
        balance -= amount;
        return `Withdraw: $${amount}`;
    }

    function getBalance() {
        return balance;
    }

   
    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    };
}


const account = createBankAccount();


document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const message = account.deposit(amount);
    document.getElementById('message').textContent = message;
    updateBalanceDisplay();
});


document.getElementById('withdrawForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const message = account.withdraw(amount);
    document.getElementById('message').textContent = message;
    updateBalanceDisplay();
});


document.getElementById('checkBalanceButton').addEventListener('click', function() {
    updateBalanceDisplay();
});


function updateBalanceDisplay() {
    const currentBalance = account.getBalance();
    document.getElementById('balance').textContent = `$${currentBalance}`;
}