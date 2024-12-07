function checkLeapyear() {
    const year = document.getElementById("year").value

    let Result;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        Result = "Leap Year";
    } else {
        Result = "Not a Leap Year";
    }

    document.getElementById("result").innerText = Result;
}