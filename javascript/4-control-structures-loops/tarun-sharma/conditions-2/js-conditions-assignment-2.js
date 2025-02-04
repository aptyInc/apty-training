function leapYearFunction(){
    var year = document.getElementById("year").value;
    year = parseInt(year);

    var result;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result = "Leap Year";
    } else {
        result = "Not a leap year :(";
    }


    document.getElementById("result").innerText = result;

}