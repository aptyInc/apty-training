function createBankAccount() {
    let balance = 0;

    return {
        // Method to deposit money
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited $${amount}. Current balance: $${balance}`;
            } else {
                return `Deposit amount must be positive.`;
            }
        },
        // Method to withdraw money
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. Current balance: $${balance}`;
            } else if (amount > balance) {
                return `Insufficient funds. Current balance: $${balance}`;
            } else {
                return `Withdrawal amount must be positive.`;
            }
        },
        // Method to check balance
        getBalance() {
            return `Current balance: $${balance}`;
        }
    };
}

// Create a bank account instance
const myAccount = createBankAccount();

// Functions for user actions
function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const result = myAccount.deposit(amount);
    document.getElementById('result').textContent = result;
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    const result = myAccount.withdraw(amount);
    document.getElementById('result').textContent = result;
}

function checkBalance() {
    const result = myAccount.getBalance();
    document.getElementById('result').textContent = result;
}