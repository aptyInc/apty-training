const nameBox = document.getElementById("nameBox");


const letters = [
    ["L", "      ", "U", "   U", "   CCCC", "  K   K", "  Y   Y"],
    ["L", "      ", "U", "   U", "  C     ", "  K  K ", "   Y Y"],
    ["L", "      ", "U", "   U", "  C     ", "  KK   ", "    Y"],
    ["L", "      ", "U", "   U", "  C     ", "  K  K ", "    Y"],
    ["LLLLL ", "   ", " UUU ", "   ", "  CCCC ", "  K   K", "    Y"]
];


for (const row of letters) {
    let line = "";
    for (const col of row) {
        line += col + " ";
    }
    console.log(line);
}


let htmlOutput = "";
for (const line of letters) {
    htmlOutput += line.join(" ") + "\n";
}

nameBox.textContent = htmlOutput;
