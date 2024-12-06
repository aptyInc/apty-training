function primeNumbers() {
    const start = parseInt(document.getElementById("value1").value);
    const end = parseInt(document.getElementById("value2").value);
    let prime="";

    for (let num = start; num <= end; num++) {
        if (num < 2) continue; 
        let isPrime = true;

        for (let divisor = 2; divisor <= Number(num/2); divisor++) {
            if (num % divisor === 0) {
                isPrime = false; 
                break;
            }
        }

        if (isPrime) {
            prime += `${num} `; 
        }
        
    }

    document.getElementById("result").innerText =` Prime Numbers in range ${start} to ${end} are ${prime}`;
    
}