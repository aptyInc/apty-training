function printCustomName() {
  const letters = {
    A: ["  A  ", " A A ", "AAAAA", "A   A", "A   A"],
    B: ["BBBB ", "B   B", "BBBB ", "B   B", "BBBB "],
    C: [" CCCC", "C    ", "C    ", "C    ", " CCCC"],
    D: ["DDDD ", "D   D", "D   D", "D   D", "DDDD "],
    E: ["EEEEE", "E    ", "EEE  ", "E    ", "EEEEE"],
    F: ["FFFFF", "F    ", "FFF  ", "F    ", "F    "],
    G: [" GGGG", "G    ", "G  GG", "G   G", " GGG "],
    H: ["H   H", "H   H", "HHHHH", "H   H", "H   H"],
    I: [" III ", "  I  ", "  I  ", "  I  ", " III "],
    J: [" JJJJ", "   J ", "   J ", "J  J ", " JJ  "],
    K: ["K   K", "K  K ", "KK   ", "K  K ", "K   K"],
    L: ["L     ", "L     ", "L     ", "L     ", "LLLLLL"],
    M: ["M   M", "MM MM", "M M M", "M   M", "M   M"],
    N: ["N   N", "NN  N", "N N N", "N  NN", "N   N"],
    O: [" OOO ", "O   O", "O   O", "O   O", " OOO "],
    P: ["PPPP ", "P   P", "PPPP ", "P    ", "P    "],
    Q: [" QQQ ", "Q   Q", "Q   Q", "Q  QQ", " QQQQ"],
    R: ["RRRR ", "R   R", "RRRR ", "R  R ", "R   R"],
    S: [" SSSS", "S    ", " SSS ", "    S", "SSSS "],
    T: ["TTTTT", "  T  ", "  T  ", "  T  ", "  T  "],
    U: ["U   U", "U   U", "U   U", "U   U", " UUU "],
    V: ["V   V", "V   V", "V   V", " V V ", "  V  "],
    W: ["W   W", "W   W", "W W W", "WW WW", "W   W"],
    X: ["X   X", " X X ", "  X  ", " X X ", "X   X"],
    Y: ["Y   Y", " Y Y ", "  Y  ", "  Y  ", "  Y  "],
    Z: ["ZZZZZ", "   Z ", "  Z  ", " Z   ", "ZZZZZ"],
  };

  // Get the name input by the user
  const name = document.getElementById("nameInput").value.toUpperCase();

  if (!name) {
    alert("Please enter a name.");
    return;
  }

  // Initialize result array to store the final pattern
  const result = ["", "", "", "", ""];

  // Build the name by concatenating patterns
  for (const char of name) {
    if (letters[char]) {
      const pattern = letters[char];
      for (let i = 0; i < pattern.length; i++) {
        result[i] += pattern[i] + "   "; // Add spacing between letters
      }
    } else {
      alert(`Character "${char}" is not supported.`);
      return;
    }
  }

  // Display the final pattern on the HTML page
  document.getElementById("result").textContent = result.join("\n");
}
