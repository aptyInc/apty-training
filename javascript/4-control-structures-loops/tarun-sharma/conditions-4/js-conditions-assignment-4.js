function highestNumber() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);

    if (number1 > number2) {
        result = "Number 1 is the highest";
    } else if (number2 > number3) {
        result = "Number 2 is the highest";
    } else if (number3 > number2) {
        result = "Number 3 is the highest";
    } else if (number3 > number1) {
        result = "Number 3 is the highest";
    } else if (number2 > number1) {
        result = "Number 2 is the highest";
    } else if (number1 > number3) {
        result = "Number 1 is the highest";
    } else {
        result = "invalid";
    }

    var result;



    document.getElementById("result").innerText = "Higest number is " + result;
}