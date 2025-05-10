function generatePyramid() {
    const rows = Number(document.getElementById("rows").value);
    let pattern = '';

    for (let i = 1; i <= rows; i++) {
        let space = '';
        for (let j = 1; j <= rows - i; j++) {
            space += ' ';
        }

        let star = '';
        for (let k = 1; k <= (2 * i - 1); k++) {
            star += '*';
        }

        pattern += space + star + '\n';
    }

    document.getElementById("pattern").textContent = pattern;
}