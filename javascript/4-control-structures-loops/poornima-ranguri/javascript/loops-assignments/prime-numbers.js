function findPrimeNumbers() {
    const startInput = document.getElementById('startInput');
    const endInput = document.getElementById('endInput');
    const primeResultElement = document.getElementById('primeResult');

    const start = parseInt(startInput.value);
    const end = parseInt(endInput.value);

   
    if (isNaN(start) || isNaN(end)) {
        primeResultElement.innerHTML = 'Please enter valid numbers.';
        return;
    }

    if (start > end) {
        primeResultElement.innerHTML = 'Start number must be less than or equal to end number.';
        return;
    }

    if (start < 1) {
        primeResultElement.innerHTML = 'Start number must be at least 1.';
        return;
    }

    const primeNumbers = [];

    for (let num = start; num <= end; num++) {
        let isPrime = true;

        
        for (let divisor = 2; divisor < num; divisor++) {
           
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && num > 1) {
            primeNumbers.push(num);
        }
    }

    if (primeNumbers.length === 0) {
        primeResultElement.innerHTML = 'No prime numbers found in the given range.';
    } else {
        const primeHTML = primeNumbers.map(prime => 
            `<span class="prime-number">${prime}</span>`
        ).join('');
        
        primeResultElement.innerHTML = primeHTML;
    }
}