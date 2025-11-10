const sumOutput = document.getElementById("sumResult");
const avgOutput = document.getElementById("avgResult");

function processArray() {
    const raw = document.getElementById("arrInput").value.trim();

    if (!raw) {
        sumOutput.textContent = "Please enter a comma-separated list.";
        avgOutput.textContent = "";
        return;
    }

    const parts = raw.split(",").map(x => Number(x.trim()));

    if (parts.some(n => isNaN(n))) {
        sumOutput.textContent = "Invalid input: all values must be numbers.";
        avgOutput.textContent = "";
        return;
    }

    let sum = 0;


    for (const num of parts) {
        sum += num;
    }

    const average = sum / parts.length;

    sumOutput.textContent = `Sum: ${sum}`;
    avgOutput.textContent = `Average: ${average}`;
}
