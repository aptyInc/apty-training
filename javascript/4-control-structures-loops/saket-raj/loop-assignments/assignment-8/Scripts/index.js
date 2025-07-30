const nameArt = [
  ["SSSS ", "  A  ", "K  KK", " EEEE ", "TTTTT"],
  ["S    ", " A A ", "K K   ", "E     ", " T  "],
  ["SSSS ", "AAAAA", "KKK   ", "EEE   ", " T  "],
  ["   S", " A   A", "K K   ", "E     ", " T  "],
  ["SSSS ", "A   A", "K  KK ", "EEEE ", "  T  "],
];

let result = "";

for (const row of nameArt) {
  for (const letter of row) {
    result += letter + "  ";
  }
  result += "\n";
}

console.log(result);
