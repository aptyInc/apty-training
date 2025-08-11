function findPrimes() {
    const start = parseInt(document.getElementById("startRange").value);
    const end = parseInt(document.getElementById("endRange").value);

    let prime = "";

    for (let n = start; n <= end; n++) {
        if (n > 1) {
            let isPrime = true;
            for (let i = 2; i < n; i++) {
                if (n % i === 0) { 
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                prime += n + " "; 
            }
        }
    }

    document.getElementById("primeResult").innerText = `Prime Numbers: ${prime}`;
}
