function printLetters() {
    const letters = {
        M: [
            ["M", " ", " ", " ", "M"],
            ["M", "M", " ", "M", "M"],
            ["M", " ", "M", " ", "M"],
            ["M", " ", " ", " ", "M"],
            ["M", " ", " ", " ", "M"]
        ],
        A: [
            [" ", " ", "A", " ", " "],
            [" ", "A", " ", "A", " "],
            ["A", " ", "A", " ", "A"],
            ["A", " ", " ", " ", "A"],
            ["A", " ", " ", " ", "A"]
        ],
        D: [
            ["D", "D", "D", "D", " "],
            ["D", " ", " ", " ", "D"],
            ["D", " ", " ", " ", "D"],
            ["D", " ", " ", " ", "D"],
            ["D", "D", "D", "D", " "]
        ],
        H: [
            ["H", " ", " ", " ", "H"],
            ["H", " ", " ", " ", "H"],
            ["H", "H", "H", "H", "H"],
            ["H", " ", " ", " ", "H"],
            ["H", " ", " ", " ", "H"]
        ],
        U: [
            ["U", " ", " ", " ", "U"],
            ["U", " ", " ", " ", "U"],
            ["U", " ", " ", " ", "U"],
            ["U", " ", " ", " ", "U"],
            [" ", "U", "U", "U", " "]
        ]
    };
    let pattern="";
    const name = ["M", "A", "D", "H", "U"];
    for (let i = 0; i < 5; i++) {  
        for (const letter of name) {
            pattern += letters[letter][i].join(" ") + "\t"; // Add spaces between letters
        } 
        pattern+="\n"
    }
    console.log(pattern);
    document.getElementById("output").textContent= pattern;
}

