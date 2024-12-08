const userInputElement = document.getElementById("userInput");


function fibonacci(n){
    if (n === 0){
        return 0 ;
    }

    if(n === 1){
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

document.getElementById("onFibonacciForm").addEventListener("submit", function(event){
    event.preventDefault()
    let userInput = parseInt(userInputElement.value)


    if(userInput < 1 || userInput > 20){
        document.getElementById("errorMsg").textContent = "Please enter a number beween 1 and 20"
    }else{
        const series  = []
        for (let i = 0; i <=  userInput; i++){
            series.push(fibonacci(i))
        }

        document.getElementById("result").innerText = series.join(", ")
    }
})