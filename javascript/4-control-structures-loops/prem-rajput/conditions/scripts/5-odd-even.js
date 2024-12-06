function checkOddEven() {
    var num = document.getElementById("number").value;
    var result;

    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    document.getElementById("result").innerHTML = "The number is: " + result;
}
