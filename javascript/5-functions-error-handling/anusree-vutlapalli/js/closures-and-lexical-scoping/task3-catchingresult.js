let cache = {}; 
        function factorial(n) {
            if (cache[n]) {
                return cache[n];
            }

            if (n === 0 || n === 1) {
                return 1;
            }

            let result = n * factorial(n - 1);
            cache[n] = result; // Cache the result
            return result;
        }

        function calculate() {
            let num = parseInt(document.getElementById("number").value); 
            let result = factorial(num); 
            document.getElementById("result").textContent = `Factorial of ${num} is ${result}`; 
        }