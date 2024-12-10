function factorialCalculator() {

    let cache = {}; 

    function factorial(n) {
        if (n in cache) {
            return cache[n]; 
        }
        if (n === 0 || n === 1) {
            cache[n] = 1; 
        } else {
            cache[n] = n * factorial(n - 1); 
        }
        return cache[n];
    }

    return factorial;

}


const cachedFactorial = factorialCalculator();


function calculateFactorial() {
    let num = parseInt(document.getElementById("number").value);
    if (isNaN(num) || num < 0) {

        document.getElementById("result").innerText = "Please enter a non-negative integer.";

        return;
    }

    let result = cachedFactorial(num); 

    document.getElementById("result").innerText = `Factorial of ${num} is ${result}`;
    
}