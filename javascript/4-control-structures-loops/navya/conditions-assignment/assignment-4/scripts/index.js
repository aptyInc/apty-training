const output = document.getElementById("output");

function checkLargest() {
    const a = Number(document.getElementById("n1").value);
    const b = Number(document.getElementById("n2").value);
    const c = Number(document.getElementById("n3").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.textContent = "Please enter valid numbers!";
        return;
    }

    let biggest;

    if (a >= b && a >= c) {
        biggest = a;
    } else if (b >= a && b >= c) {
        biggest = b;
    } else {
        biggest = c;
    }

    output.textContent = `Largest Number: ${biggest}`;
}
