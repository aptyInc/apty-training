function findPrimes() {
    const start = parseInt(document.getElementById('start').value)
    const end = parseInt(document.getElementById('end').value)

    if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers where start is less than or equal to end.';
        return
    }

    let primes = ''

    for (let num = start; num <= end; num++){
        let isPrime  = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false 
                break
            }
        }

        if (num > 1 && isPrime) {
            primes += num + ' '
        }
    }

    if (primes !== ''){
        document.getElementById('result').innerText = 'Prime numbers between '+start+' and '+end+' : '+primes
    }
    else {
        document.getElementById('result').innerText = 'No prime numbers found between ' + start + ' and ' + end + '.'
    }

}