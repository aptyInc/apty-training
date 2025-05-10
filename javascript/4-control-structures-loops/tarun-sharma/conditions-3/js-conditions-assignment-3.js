function calculateOutput() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    var calculation = document.getElementById("dropdown").value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    var result;

    if (calculation === "add") {
        result = number1 + number2;
    } else if (calculation === "sub") {
        result = number1 - number2;
    } else if (calculation === "mul") {
        result = number1 * number2;
    } else if (calculation === "divide") {
        result = number1 / number2;
    } else {
        result = "invalid";
    }

    document.getElementById("result").innerText = "Result = " + result;

}