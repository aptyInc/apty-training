function findPrimes() {
    const start = parseInt(document.getElementById("start").value); 
    const end = parseInt(document.getElementById("end").value); 
    let result = "Prime Numbers:<br>";
  
    for (let num = start; num <= end; num++) {
      let isPrime = true;
  
      if (num < 2) {
        continue; 
      }
  
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false; 
          break;
        }
      }
  
      if (isPrime) {
        result += num + "<br>"; 
      }
    }
  
    document.getElementById("result").innerHTML = result; 
  }
  