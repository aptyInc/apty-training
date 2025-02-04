function primes() {
    let d = Number(document.getElementById('in1').value);
    let u = Number(document.getElementById('in2').value);
    let result = '';

    
    for (let i = d; i <= u; i++) {
        let isPrime = true;

        
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        
        if (isPrime && i > 1) {
            result += i + '<br>';
        }
    }

   
    if (result === '') {
        document.getElementById('res').innerHTML = 'No prime numbers in this range.';
    } else {
        document.getElementById('res').innerHTML = 'Prime numbers: <br>' + result;
    }
}