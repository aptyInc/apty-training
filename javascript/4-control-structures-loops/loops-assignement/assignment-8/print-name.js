function displayName() {

    const pattern = [
        ["RRRR  ", "  A   ", " K   K", " SSS  ", " H   H", " III ", " TTTTT", " A   "],
        ["R   R ", " A A  ", " K  K ", "S     ", " H   H", "  I  ", "   T  ", "A A  "],
        ["RRRR  ", "AAAAA ", " KKK  ", " SSS  ", " HHHHH", "  I  ", "   T  ", "AAAAA "],
        ["R R   ", "A   A ", " K  K ", "    S ", " H   H", "  I  ", "   T  ", "A   A "],
        ["R  RR ", "A   A ", " K   K", " SSS  ", " H   H", " III ", "   T  ", "A   A "],
    ];

    let result = ""; 
    for (let row of pattern) {
        for (let value of row) {
            result += value;
        }
        result += "\n"; 
    }

    console.log(result);
}
displayName();