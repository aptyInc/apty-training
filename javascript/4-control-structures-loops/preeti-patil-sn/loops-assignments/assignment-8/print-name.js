const nameArray = [
    ["P P P", " RRR  ", " EEEE ", " EEEE ", " TTTTT", " III "],
    ["P   P", " R  R ", " E    ", " E    ", "   T  ", "  I  "],
    ["PPPP ", " RRR  ", " EEEE ", " EEEE ", "   T  ", "  I  "],
    ["P    ", " R R  ", " E    ", " E    ", "   T  ", "  I  "],
    ["P    ", " R  R ", " EEEE ", " EEEE ", "   T  ", " III "],
  ];
  
  let pattern = "<pre>";
  for (const row of nameArray) {
    let line = "";
    for (const letter of row) {
      line += letter + "   "; 
    }
    pattern += line + "\n";
  }
  pattern += "</pre>";
  
  document.getElementById("name").innerHTML = pattern;
  