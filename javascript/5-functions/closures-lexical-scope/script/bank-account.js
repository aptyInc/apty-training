function bankAccount() {
    let balance = 0; 

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            return `Deposited: $${amount}. Current balance: $${balance}.`;
        } else {
            return "Deposit amount must be positive.";
        }
    }

    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return `Withdrawn: $${amount}. Current balance: $${balance}.`;
        } else if (amount > balance) {
            return "Insufficient balance.";
        } else {
            return "Withdrawal amount must be positive.";
        }
    }

    function checkBalance() {
        return `Current balance: $${balance}.`;
    }

    return {
        deposit,
        withdraw,
        checkBalance,
    };
}

const account = bankAccount();

document.getElementById("depositBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("depositAmount").value);
    document.getElementById('result').innerText = (account.deposit(amount));
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("withdrawAmount").value);
    document.getElementById('result').innerText = (account.withdraw(amount));
});

document.getElementById("checkBalanceBtn").addEventListener("click", () => {
    document.getElementById('result').innerText = (account.checkBalance());
});
