function createBankAccount() {
    let balance = 0;

    return {
        deposit: function(amount) {
            if (amount <= 0) {
                alert("Deposit amount must be greater than 0");
                return;
            }
            balance += amount;
            alert(`Deposited: $${amount}`);
        },

        withdraw: function(amount) {
            if (amount <= 0) {
                alert("Withdrawal amount must be greater than 0");
                return;
            }
            if (amount > balance) {
                alert("Insufficient funds");
            } else {
                balance -= amount;
                alert(`Withdrew: $${amount}`);
            }
        },

        checkBalance: function() {
            alert(`Current balance: $${balance}`);
            return balance;
        }
    };
}

const myBankAccount = createBankAccount();

function showFunction(event) {
    const actionType = event.target.name;

    if (actionType === "deposit") {
        const depositAmount = parseFloat(document.getElementById("deposit").value);
        if (!isNaN(depositAmount)) {
            myBankAccount.deposit(depositAmount);
            document.querySelector(".show_result").innerText = `${parseFloat(document.querySelector(".show_result").innerText) + depositAmount}`;
        } else {
            alert("Please enter a valid deposit amount");
        }
    } else if (actionType === "withdraw") {
        const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
        if (!isNaN(withdrawAmount)) {
            myBankAccount.withdraw(withdrawAmount);
            document.querySelector(".show_result").innerText = `${parseFloat(document.querySelector(".show_result").innerText) - withdrawAmount}`;
        } else {
            alert("Please enter a valid withdrawal amount");
        }
    } else {
        myBankAccount.checkBalance();
    }
}
