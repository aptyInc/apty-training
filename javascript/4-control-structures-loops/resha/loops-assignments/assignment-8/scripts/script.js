const nameArt = [
    ["RRRR", "EEE ", " SSS ", "HH HH", "  A  "],
    ["R  R", "E   ", "S    ", "HH HH", " A A "],
    ["RRRR", "EEE ", " SSS ", "HHHHH", "AAAAA"],
    ["R R ", "E   ", "    S", "HH HH", "A   A"],
    ["R  R", "EEE ", "SSSS ", "HH HH", "A   A"],
];

let result = "";
for (const row of nameArt) {
    for (const letter of row) {
        result += letter + "  ";
    }
    result += "\n";
}

console.log(result);
