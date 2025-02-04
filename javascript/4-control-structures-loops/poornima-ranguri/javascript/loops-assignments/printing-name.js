let pooriArray = {
    P: [
        ["P", "P", "P", "P", "P"],
        ["P", " ", " ", " ", "P"],
        ["P", " ", " ", " ", "P"],
        ["P", "P", "P", "P", "P"],
        ["P", " ", " ", " ", " "],
        ["P", " ", " ", " ", " "]
    ],
    O: [
        ["O", "O", "O", "O", "O"],
        ["O", " ", " ", " ", "O"],
        ["O", " ", " ", " ", "O"],
        ["O", " ", " ", " ", "O"],
        ["O", " ", " ", " ", "O"],
        ["O", "O", "O", "O", "O"]
    ],
    R: [
        ["R", "R", "R", "R", " "],
        ["R", " ", " ", "R", " "],
        ["R", " ", " ", "R", " "],
        ["R", "R", "R", "R", " "],
        ["R", " ", "R", " ", " "],
        ["R", " ", " ", "R", " "]
    ],
    I: [
        ["I", "I", "I", "I", "I"],
        [" ", " ", "I", " ", " "],
        [" ", " ", "I", " ", " "],
        [" ", " ", "I", " ", " "],
        [" ", " ", "I", " ", " "],
        ["I", "I", "I", "I", "I"]
    ]
};



var name = "POORI";
var pattern = "";

for (let i = 0; i < 6; i++) {
    for (let letter of name) {
        pattern += pooriArray[letter][i].join("") + " ";
    }
    pattern += "\n";
}

console.log(pattern)

document.getElementById("result").textContent = pattern;
