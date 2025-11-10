const result = document.getElementById("result");

function calculateSum() {
    const n = Number(document.getElementById("limit").value);

    if (isNaN(n) || n <= 0) {
        result.textContent = "Please enter a positive number!";
        return;
    }

    let total = 0;
    let i = 1;

    while (i <= n) {
        total += i;
        i++;
    }

    result.textContent = `Sum of numbers from 1 to ${n} is ${total}`;
}
