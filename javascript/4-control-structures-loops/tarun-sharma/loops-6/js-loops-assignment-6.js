function primeNumbers() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);

    var result = "";
 

    for (var num = num1; num <= num2; num++) {

        var isPrime = true;

        for (var i = 2; i < num; i++) {

            if (num % i === 0) {

                isPrime = false;

                break;
            }
        }


        if (isPrime && num > 1) {

            result += num + " ";
        }
    }
 
    
    document.getElementById("result").innerHTML = "prime numbers are " + result;
}