function calculate(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return calculate(n - 1) + calculate(n - 2); 
}

function calculateFibonacci() {

    let number = document.getElementById('number').value; 

    number = parseInt(number); 


    let result = ""; 

    for (let i = 0; i <= number; i++) {

        result += calculate(i) + " "; 

    }


    document.getElementById("result").innerHTML = result; 

}
