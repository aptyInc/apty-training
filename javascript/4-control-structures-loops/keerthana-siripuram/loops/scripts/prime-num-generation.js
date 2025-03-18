function primeGeneration() {
    let from = parseInt(document.getElementById("num1").value)
    let to = parseInt(document.getElementById("num2").value)
    for (let num = from; num <= to; num++) {
        checkPrime(num) ? document.getElementById("res").innerHTML += `Prime Number:: ${num}<br>` : ""
    }
}
function checkPrime(num) {
    if (num < 2) {
        return false;
    }
    else {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}