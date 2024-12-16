function findPrimeNumbers() {
    const rangeInput = document.getElementById('range').value;
    const resultDiv = document.getElementById('result');
    
    const [start, end] = rangeInput.split(',').map(num => parseInt(num.trim()));

    if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
        resultDiv.innerHTML = "Please enter a valid range. First Value Should be less than second value (Eg: 10, 20).";
        return;
    }

    let primes = [];

    // Nested for loops to find primes
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && num > 1) {
            primes.push(num);
        }
    }

    // Display the result
    resultDiv.innerHTML = `<h2>Prime Numbers between ${start} and ${end}:</h2><p>${primes.join(', ')}</p>`;
}
