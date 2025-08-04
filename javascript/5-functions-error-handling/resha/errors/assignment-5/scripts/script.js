const output = document.getElementById("output");
const bal = document.getElementById("bal");


function withdrawAmount(balance, amount) {
    if (amount > balance) {
        throw {
            errorCode: 101,
            errorMessage: "Insufficient funds for this transaction.",
        };
    }
}

function account() {
    let balance = 10000;

    function deposit() {
        const amt = Number(document.getElementById("amt").value);
        if (amt < 0 || isNaN(amt)) {
            output.innerText = `Enter a valid amount.`;
            return;
        }
        balance += amt;
        output.innerText = `Deposited: ${amt}`;
    }

    function withdraw() {
        const amt = Number(document.getElementById("amt").value);
        if (amt < 0 || isNaN(amt)) {
            output.innerText = `Enter a valid amount.`;
            return;
        }

        try {
            withdrawAmount(balance, amt);
            balance -= amt;
            output.innerText = `Withdrawn: ${amt}`;
        } catch (error) {
            output.innerText = `Error ${error.errorCode}: ${error.errorMessage}`;
        }
    }

    function checkBalance() {
        bal.innerText = `Current Balance: ${balance}`;
    }

    return { deposit, withdraw, checkBalance };
}

const acc = account();
