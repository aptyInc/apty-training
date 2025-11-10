const patternBox = document.getElementById("patternBox");

function makePyramid() {
    const totalRows = Number(document.getElementById("rows").value);

    if (isNaN(totalRows) || totalRows <= 0) {
        patternBox.textContent = "Please enter a positive number!";
        return;
    }

    let output = "";

    for (let i = 1; i <= totalRows; i++) {
        const spaces = " ".repeat(totalRows - i);
        const stars = "*".repeat(i * 2 - 1);
        output += spaces + stars + "\n";
    }

    patternBox.textContent = output;
}
