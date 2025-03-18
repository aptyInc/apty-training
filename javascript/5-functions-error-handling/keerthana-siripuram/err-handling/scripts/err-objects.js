function withDraw() {
    let balance = parseInt(document.getElementById("bal").value)
    let withDrawAmt = parseInt(document.getElementById("with-draw-amt").value)
    try {
        const newBalance = withDrawAmtHandler(balance,withDrawAmt)
        document.getElementById("res").textContent =`WithDraw Successful! Remaining Balance ${balance}`
    }
    catch (error) {
        document.getElementById("res").textContent =`Error: ${error.errorCode}:${error.errorMessage}`
    }
}

function withDrawAmtHandler(balance,withDrawAmt)
{
    if(withDrawAmt>balance) {
        const error=new Error("Insufficient funds")
        error.errorCode = 101
        error.errorMessage=`Withdrawal amount of ${withDrawAmt} exceeds balance of ${balance}`
        throw error
    }
    return balance-withDrawAmt
}