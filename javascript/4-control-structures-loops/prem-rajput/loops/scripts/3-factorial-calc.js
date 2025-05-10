function calculateFactorial() {
    var num = document.getElementById("number").value;
    var factorial = 1;
    var steps = "";

    var i = 1;
    do {
        factorial *= i;
        steps += i + (i < num ? " x " : " = ");
        i++;
    } while (i <= num);

    document.getElementById("steps").innerHTML = "Calculation Steps: " + steps;
    document.getElementById("result").innerHTML = "Factorial: " + factorial;
}
