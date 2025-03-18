function checkOddOrEven() {
    let num = parseInt(document.getElementById("num").value)
    if (num % 2 != 0) {
        document.getElementById("res").textContent = "Result:Odd Number"
    }
    else {
        document.getElementById("res").textContent = "Result:Even Number"
    }
}