const resultBox = document.getElementById("resultBox");

function calculateSI() {
    const p = Number(document.getElementById("principal").value);
    const r = Number(document.getElementById("rate").value);
    const t = Number(document.getElementById("time").value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        resultBox.textContent = "Please enter valid numeric values.";
        return;
    }

    const interest = (p * r * t) / 100;

    resultBox.textContent = `Simple Interest: ${interest}`;
}
