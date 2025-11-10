const stepsBox = document.getElementById("steps");
const finalBox = document.getElementById("final");

function computeFactorial() {
    const raw = Number(document.getElementById("factInput").value);

    if (!Number.isInteger(raw) || raw < 0) {
        stepsBox.textContent = "";
        finalBox.textContent = "Please enter a non-negative integer.";
        return;
    }


    let n = raw;
    let result = 1;
    let trace = "";


    if (n === 0) {
        trace = "1";
    } else {
        let i = n;
        do {
            result *= i;
            trace += (trace ? " × " : "") + i;
            i--;

        } while (i >= 1);
    }

    stepsBox.innerHTML = `${raw}! = ${trace}`;
    finalBox.textContent = `Result: ${result}`;
}
