const output = document.getElementById('output');

function checkYear() {
    const year = Number(document.getElementById('year').value);

    if (year <= 0) {
        output.innerText = "Please enter a valid year.";
        return;
    }
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        output.innerText = `Yes, ${year} is a leap year!`;
    }
    else {
        output.innerText = `No, ${year} is not a leap year.`;
    }
}