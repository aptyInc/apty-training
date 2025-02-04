function findPrimeNumbers() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var result = "";

    for (var num = start; num <= end; num++) {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && num > 1) {
            result += num + " ";
        }
    }

    document.getElementById("result").innerHTML = "Prime Numbers: " + result;
}
