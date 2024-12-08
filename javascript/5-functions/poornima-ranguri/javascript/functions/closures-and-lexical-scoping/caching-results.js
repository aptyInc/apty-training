function factorialCalculator(){
    const cache = {};

    function factorial(n){
        if(n === 0){
            return 0;
        }

        if(n === 1){
            return 1;
        }

        return n * factorial(n-1)
    }

    return function(n){
        if(cache[n] !== undefined){
            console.log(`Fetching from cache : ${n}!`)
            return cache[n];
        }

        console.log(`calculating : $[n]!`)
        const result = factorial(n);
        cache[n] = result;
        return result
    }
}



const cachedFactorial = factorialCalculator();


function calculateFactorial(){
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    const number = parseInt(inputElement.value);

    if (number < 0){
        resultElement.textContent = "Please eneter a Non-Negative Number"
    }

    const result = cachedFactorial(number)
    console.dir(cachedFactorial)
    resultElement.textContent = `The factorial of ${number} is ${result}`
}