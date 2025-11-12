const msg = document.getElementById("message");

function createAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
            return `Deposited ₹${amount}. Current balance: ₹${balance}`;
        },

        withdraw(amount) {
            if (amount > balance) {
                return "Insufficient balance!";
            }
            balance -= amount;
            return `Withdrawn ₹${amount}. Current balance: ₹${balance}`;
        },

        check() {
            return `Current balance: ₹${balance}`;
        }
    };
}


const account = createAccount();

function depositMoney() {
    const amt = Number(document.getElementById("amount").value);

    if (amt <= 0) {
        msg.textContent = "Enter a valid amount!";
        return;
    }

    msg.textContent = account.deposit(amt);
}

function withdrawMoney() {
    const amt = Number(document.getElementById("amount").value);

    if (amt <= 0) {
        msg.textContent = "Enter a valid amount!";
        return;
    }

    msg.textContent = account.withdraw(amt);
}

function showBalance() {
    msg.textContent = account.check();
}
