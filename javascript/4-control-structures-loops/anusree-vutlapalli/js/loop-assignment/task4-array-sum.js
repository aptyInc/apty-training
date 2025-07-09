function calculateSumAndAverage() {
    const input = document.getElementById("numbers").value;
    const numString = input.split(",");
    let sum = 0;
    let isvalid = true;
    for (let i = 0; i < numString.length; i++) {
        let number = parseInt(numString[i])
        if (isNaN(number)) {
            isvalid = false;
            break;
        }
        sum = sum + number;

    }
    if (!isvalid) {
        document.getElementById("result").innerText = "please enter a valid numbers seperated by commas";
        return;
    }
    const avg = sum / numString.length;
    document.getElementById('result').innerHTML = `Sum: ${sum}, Average: ${avg}`;
}