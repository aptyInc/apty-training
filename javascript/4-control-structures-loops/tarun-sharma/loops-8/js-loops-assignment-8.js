var nameArray = {
    M: [
        ["M", " ", " ", " ", "M"],
        ["M", "M", " ", "M", "M"],
        ["M", " ", "M", " ", "M"],
        ["M", " ", " ", " ", "M"],
        ["M", " ", " ", " ", "M"],
    ],
    E: [
        ["E", "E", "E", "E", "E"],
        ["E", " ", " ", " ", " "],
        ["E", "E", "E", " ", " "],
        ["E", " ", " ", " ", " "],
        ["E", "E", "E", "E", "E"],
    ],
    S: [
        ["S", "S", "S", "S", "S"],
        ["S", " ", " ", " ", " "],
        ["S", "S", "S", "S", "S"],
        [" ", " ", " ", " ", "S"],
        ["S", "S", "S", "S", "S"],
    ],
    S: [
        ["S", "S", "S", "S", "S"],
        ["S", " ", " ", " ", " "],
        ["S", "S", "S", "S", "S"],
        [" ", " ", " ", " ", "S"],
        ["S", "S", "S", "S", "S"],
    ],
    I: [
        ["I", "I", "I", "I", "I"],
        [" ", " ", "I", " ", " "],
        [" ", " ", "I", " ", " "],
        [" ", " ", "I", " ", " "],
        ["I", "I", "I", "I", "I"],
    ],
};
 
var name = "MESSI";
var pattern = "";
 
for (let i = 0; i < 5; i++) {
    for (let letter of name) {
        pattern += nameArray[letter][i].join("") + " ";
    }
    pattern += "\n";
}
 
document.getElementById("result").textContent = pattern;