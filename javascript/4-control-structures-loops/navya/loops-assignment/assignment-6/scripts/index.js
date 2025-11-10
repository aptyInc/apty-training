const resultBox = document.getElementById("resultBox");

function findPrimes() {
    const start = Number(document.getElementById("startNum").value);
    const end = Number(document.getElementById("endNum").value);

    if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
        resultBox.textContent = "Please enter a valid positive range.";
        return;
    }

    let primes = [];

    for (let num = start; num <= end; num++) {
        if (num < 2) continue;

        let isPrime = true;


        for (let div = 2; div <= Math.sqrt(num); div++) {
            if (num % div === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    resultBox.innerHTML = primes.length
        ? `Prime Numbers: ${primes.join(", ")}`
        : "No prime numbers found in this range.";
}
