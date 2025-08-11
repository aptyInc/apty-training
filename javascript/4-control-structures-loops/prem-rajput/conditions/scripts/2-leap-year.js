function checkLeapYear() {
    
    var year = document.getElementById("year").value;
    var result;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = "Leap Year";
    } else {
        result = "Not a Leap Year";
    }

    document.getElementById("result").innerHTML = result;

}
