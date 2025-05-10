function generatePyramid() {
    var rows = parseInt(document.getElementById("rows").value);
    var pattern = "";

    for (var i = 1; i <= rows; i++) {
        var spaces = " ".repeat(rows - i);
        var stars = "*".repeat(2 * i - 1);
        pattern += spaces + stars + "\n";
    }

    document.getElementById("pattern").textContent = pattern;
}
