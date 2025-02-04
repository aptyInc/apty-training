// Function to create a caching mechanism for expensive calculations
function createCachedFactorial() {
    const cache = {}; // Closure to store cached results
  
    // Factorial calculation with caching
    function factorial(n) {
      if (n in cache) {
        console.log(`Fetching from cache: ${n}!`);
        return cache[n];
      }
      if (n === 0 || n === 1) {
        cache[n] = 1;
        return 1;
      }
      console.log(`Calculating: ${n}!`);
      cache[n] = n * factorial(n - 1);
      return cache[n];
    }
  
    return factorial; // Return the inner factorial function
  }
  
  // Create an instance of the cached factorial function
  const cachedFactorial = createCachedFactorial();
  
  // Function to handle user input and display results
  function handleFactorialInput(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
  
    const inputField = document.getElementById('numberInput');
    const resultContainer = document.getElementById('result');
  
    const number = parseInt(inputField.value, 10);
  
    if (isNaN(number) || number < 0) {
      alert('Please enter a valid non-negative number!');
      return;
    }
  
    const result = cachedFactorial(number);
  
    // Display the result on the page
    resultContainer.textContent = `Factorial of ${number} is: ${result}`;
  }
  
  // Attach event listener to the form
  document.getElementById('factorialForm').addEventListener('submit', handleFactorialInput);
  