function checkLeapYear() {
    let res;
    let year = parseInt(document.getElementById("year").value)
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        res = "Leap Year"
    }
    else {
        res = "Not a Leap Year"
    }
    document.getElementById("res").textContent = res
}