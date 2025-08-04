function createAccount() {
  let balance = 0; // pvt var

  return {
    deposit: function () {
      const val = Number(document.getElementById("amount").value);
      balance += val;
      document.getElementById("result").innerText = `Deposited ₹${val}`;
    },
    withdraw: function () {
      const val = Number(document.getElementById("amount").value);
      if (val <= balance) {
        balance -= val;
        document.getElementById("result").innerText = `Withdrew ₹${val}`;
      } else {
        document.getElementById("result").innerText = `Insufficient balance`;
      }
    },
    checkBalance: function () {
      document.getElementById("result").innerText = `Balance: ₹${balance}`;
    },
  };
}

const account = createAccount();
