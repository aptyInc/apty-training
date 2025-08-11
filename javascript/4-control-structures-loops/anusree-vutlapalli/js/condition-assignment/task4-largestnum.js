function largestNum() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    const largest = Math.max(num1, num2, num3);

    document.getElementById("result").innerText = `The largest number is: ${largest}`;
}
