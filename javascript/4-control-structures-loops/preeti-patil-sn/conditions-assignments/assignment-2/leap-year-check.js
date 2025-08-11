function checkLeapYear() {
    let year = document.getElementById('yearInput').value;

    if (year.length !== 4 || isNaN(year)) {
        document.getElementById('result').textContent = "Please enter a valid 4-digit year.";
        return;
    }
    // Convert the string to a number for calculation, if % operator is applied to '2024', the output will be NAN, but if it is converted to number using parseInt then 2024 becomes number
    year = parseInt(year);

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById('result').textContent = "The entered year is a leap year.";
    } else {
        document.getElementById('result').textContent = "The entered year is not a leap year.";
    }
}
