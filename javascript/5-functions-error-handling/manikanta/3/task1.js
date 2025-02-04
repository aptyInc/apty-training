 
        function BankAccount() {
            let balance = 0;  

            
            this.deposit = function(amount) {
                if (amount > 0) {
                    balance += amount;
                    return `Deposited $${amount}. Current balance: $${balance}.`;
                } else {
                    return "Deposit amount must be greater than zero.";
                }
            };

            
            this.withdraw = function(amount) {
                if (amount > 0) {
                    if (amount <= balance) {
                        balance -= amount;
                        return `Withdrew $${amount}. Current balance: $${balance}.`;
                    } else {
                        return "Insufficient funds!";
                    }
                } else {
                    return "Withdraw amount must be greater than zero.";
                }
            };

     
            this.checkBalance = function() {
                return `Current balance: $${balance}.`;
            };
        }

        
        const myAccount = new BankAccount();

     
        function deposit() {
            const amount = parseFloat(document.getElementById('depositAmount').value);
            const result = myAccount.deposit(amount);
            document.getElementById('result').innerHTML = result;
            document.getElementById('depositAmount').value = ""; // Clear the input field
        }

        function withdraw() {
            const amount = parseFloat(document.getElementById('withdrawAmount').value);
            const result = myAccount.withdraw(amount);
            document.getElementById('result').innerHTML = result;
            document.getElementById('withdrawAmount').value = ""; // Clear the input field
        }

        function checkBalance() {
            const result = myAccount.checkBalance();
            document.getElementById('result').innerHTML = result;
        }