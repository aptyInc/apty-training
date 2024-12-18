function createBankAccount() {
    let balance = 0; 

    return {
        deposit(amount) {
            if (amount > 0) {
                
                balance += amount;
                return `Deposited: $${amount}`;

            }
            return "Deposit amount must be positive!";
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;

                return `Withdrew: $${amount}`;
            }
            return "Insufficient funds or invalid amount!";

        },
        checkBalance() {
            return `Current balance: $${balance}`;

        }
    };
}


let bankAccount = createBankAccount();


function deposit() {

    let amount = parseFloat(document.getElementById("amount").value) || 0;
    let message = bankAccount.deposit(amount);

    document.getElementById("result").innerText = message;

}


function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value) || 0;
    let message = bankAccount.withdraw(amount);

    document.getElementById("result").innerText = message;

}


function checkBalance() {
    let message = bankAccount.checkBalance();

    document.getElementById("result").innerText = message;

}