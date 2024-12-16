function calculateSumAndAvg() {
    const numberInput = document.getElementById('number').value;
    const displayTable = document.getElementById("result");

    const numberArr = numberInput.split(",").map(num => num.trim()).filter(num => num !== "");

    // Check if the input is valid (all values are numbers)
    if (numberArr.length === 0 || !numberArr.every(num => !isNaN(num))) {
        displayTable.innerHTML = `Please enter valid numbers.`;
        return;
    }

    // Convert the array items to numbers
    const numbers = numberArr.map(num => Number(num));

    // Calculate the sum and average using a for-of loop
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    const avg = sum / numbers.length;

    displayTable.innerHTML = `Sum: ${sum}<br>Average: ${avg.toFixed(2)}`;
}
