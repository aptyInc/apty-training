function createFactorialCalculator() {
    const cache = {}; 
  
    return function factorial(n) {
      if (cache[n] !== undefined) {
        return cache[n]; 
      }

      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
  
      cache[n] = result; 
      return result;
    };
  }
  
  const calculateFactorial = createFactorialCalculator();
  
  document.getElementById("calculate").addEventListener("click", function () {
    const number = parseInt(document.getElementById("numberInput").value);
    if (isNaN(number) || number < 0) {
      document.getElementById("output").textContent = "Please enter a valid non-negative number.";
      return;
    }
  
    const result = calculateFactorial(number);
    document.getElementById("output").textContent = `Factorial of ${number} is ${result}.`;
  });
  