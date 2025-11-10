const resultBox = document.getElementById("resultBox");

function checkLeap() {
    const year = Number(document.getElementById("yearInput").value);

    let msg;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        msg = "Leap Year";
    } else {
        msg = "Not a Leap Year";
    }

    resultBox.textContent = msg;
}
