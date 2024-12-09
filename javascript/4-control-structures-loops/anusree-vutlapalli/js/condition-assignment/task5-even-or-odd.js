function evenoddNum() {
    const number = parseInt(document.getElementById("number").value);
    let result;

    if (isNaN(number)) {
        result = "Please enter a valid number!";
    } else if (number % 2 === 0) {
        result = `${number} is Even.`;
    } else {
        result = `${number} is Odd.`;
    }

    document.getElementById("result").innerText = result;
}
