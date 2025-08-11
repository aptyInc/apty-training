function findPrimes() {
  const start = parseInt(document.getElementById("start").value);
  const end = parseInt(document.getElementById("end").value);
  let primes = "";

  for (let i = start; i <= end; i++) {
    let isPrime = true;

    if (i < 2) continue;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes += `${i} `;
  }

  document.getElementById("result").textContent = `Primes: ${primes}`;
}
