function primeNumWithinRange() {
  const start = parseInt(document.getElementById("number1").value);
  const end = parseInt(document.getElementById("number2").value);
  let primes = [];

  for (let num = start; num <= end; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes[primes.length] = num;
    }
  }
  let result = "Prime numbers in range: ";
  if (primes.length > 0) {
    for (let i = 0; i < primes.length; i++) {
      result += primes[i];
      if (i < primes.length - 1) {
        result += ", ";
      }
    }

    if (primes.length > 0) {
      document.getElementById("result").innerHTML = result;
    } else {
      document.getElementById("result").innerHTML =
        "No prime numbers found in this range.";
    }
  }
}
