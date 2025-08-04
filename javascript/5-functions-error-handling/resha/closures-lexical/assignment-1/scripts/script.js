const output = document.getElementById("output");
const bal = document.getElementById("bal");

function account() {
    let balance = 10000;

    function deposit() {
        const amt = Number(document.getElementById("amt").value);
        if (amt < 0 || isNaN(amt)) {
            output.innerText = `Enter a valid amount`;
            return;
        }
        balance += amt;
        output.innerText = `Deposited: ${amt}`;
    }

    function withdraw() {
        const amt = Number(document.getElementById("amt").value);
        if (amt < 0 || isNaN(amt)) {
            output.innerText = `Enter a valid amount`;
            return;
        }

        if (amt > balance) {
            output.innerText = `Insufficient balance`;
        }

        else {
            balance -= amt;
            output.innerText = `Withdrawn: ${amt}`;
        }
    }

    function checkBalance() {
        bal.innerText = `Current Balance: ${balance}`;
    }

    return { deposit, withdraw, checkBalance };
}

const acc = account();