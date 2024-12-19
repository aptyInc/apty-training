var nameArray = {
    P: [
        ["P", "P", "P", "P", "P"],
        ["P", " ", " ", " ", "P"],
        ["P", " ", " ", " ", "P"],
        ["P", "P", "P", "P", " "],
        ["P", " ", " ", " ", " "],
    ],
    R: [
        ["R", "R", "R", "R", "R"],
        ["R", " ", " ", " ", "R"],
        ["R", "R", "R", "R", " "],
        ["R", "R", " ", " ", "R"],
        ["R", " ", " ", " ", "R"],
    ],
    E: [
        ["E", "E", "E", "E", "E"],
        ["E", " ", " ", " ", " "],
        ["E", "E", "E", "E", " "],
        ["E", " ", " ", " ", " "],
        ["E", "E", "E", "E", "E"],
    ],
    M: [
        ["M", " ", " ", " ", "M"],
        ["M", "M", " ", "M", "M"],
        ["M", "M", "M", "M", "M"],
        ["M", "M", "M", "M", "M"],
        ["M", "M", "M", "M", "M"],
    ],
};

var name = "PREM";
var pattern = "";

for (let i = 0; i < 5; i++) {
    for (let letter of name) {
        pattern += nameArray[letter][i].join("") + " ";
    }
    pattern += "\n";
}

document.getElementById("namePattern").textContent = pattern;