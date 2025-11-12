const resultBox = document.getElementById("resultBox");

function sumAll(...numbers) {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
}

function findSum() {
    const raw = document.getElementById("numList").value.trim();

    if (!raw) {
        resultBox.textContent = "Please enter at least one number!";
        return;
    }

    const parts = raw.split(",").map(x => Number(x.trim()));

    if (parts.some(isNaN)) {
        resultBox.textContent = "Invalid input: Only numbers allowed!";
        return;
    }

    const result = sumAll(...parts);

    resultBox.textContent = `Sum: ${result}`;
}
