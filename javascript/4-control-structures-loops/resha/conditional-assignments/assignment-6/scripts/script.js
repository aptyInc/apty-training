const output = document.getElementById('output');

function checkSI() {
    const p = Number(document.getElementById('p').value);
    const r = Number(document.getElementById('r').value);
    const t = Number(document.getElementById('t').value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        output.innerText = "Please enter a valid number.";
        return;
    }

    output.innerText = `Simple Interest: ${(p*t*r) / 100}`;
}