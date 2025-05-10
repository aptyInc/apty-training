function createBankAccount() {
    let balance = 0; // Private variable

    function deposit(amount) {
        balance += amount;
        return `Deposited ₹${amount}. New balance: ₹${balance}.`;
    }

    function withdraw(amount) {
        if (amount > balance) {
            return "Insufficient balance.";
        }
        balance -= amount;
        return `Withdrew ₹${amount}. Remaining balance: ₹${balance}.`;
    }

    function checkBalance() {
        return `Current balance: ₹${balance}.`;
    }

    return { deposit, withdraw, checkBalance };
}

const bankAccount = createBankAccount();

function handleAction(action) {
    const amount = parseInt(document.getElementById("amount").value) || 0;
    let message;

    if (action === "deposit") {
        message = bankAccount.deposit(amount);
    } else if (action === "withdraw") {
        message = bankAccount.withdraw(amount);
    } else {
        message = bankAccount.checkBalance();
    }

    document.getElementById("result").textContent = message;
}
