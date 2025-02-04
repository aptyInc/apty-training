
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    const year = parseInt(document.getElementById("year").value);
    let result = document.getElementById("result");

    if ((year % 400 === 0) || (year % 4 === 0 && year !== 100))
        result.innerText = `${year} is leap year`;
    else result.innerText = `${year} is not a leap year`;
}