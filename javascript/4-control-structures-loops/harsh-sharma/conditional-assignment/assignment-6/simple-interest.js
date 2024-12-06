function calculateInterest() {
    // Get input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerText = "Please enter valid numbers for all fields.";
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;

    document.getElementById('result').innerText = `Simple Interest (SI) = ${simpleInterest.toFixed(2)}`;
}