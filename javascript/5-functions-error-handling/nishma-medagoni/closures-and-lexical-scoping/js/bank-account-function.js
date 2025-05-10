function bankAccount() {

    let balance = 0

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;  
            return `Deposited $${amount}`
        } else {
            return "Please enter a valid deposit amount."
        }
    }

    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;  
            return `Withdrew $${amount}`
        } else if (amount <= 0) {
            return "Please enter a valid withdrawal amount."
        } else {
            return "Insufficient funds."
        }
    }

    function checkBalance() {
        return `Your balance is $${balance}`
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        checkBalance: checkBalance
    };
}

// Create an account instance
const myAccount = bankAccount()


function depositMoney() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value)
    const result = myAccount.deposit(depositAmount)
    document.getElementById('balanceMessage').innerText = result
}


function withdrawMoney() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value)
    const result = myAccount.withdraw(withdrawAmount)
    document.getElementById('balanceMessage').innerText = result
}


function checkBalance() {
    const result = myAccount.checkBalance()
    document.getElementById('balanceMessage').innerText = result
}
