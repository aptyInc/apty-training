function printName() {
    const namepattern = [
      ['P', 'P', 'P', 'P', ' ', ' ', 'R', 'R', 'R', 'R', ' ',' ', 'A', 'A', 'A', 'A', ' ',' ', 'N', ' ', ' ', 'N', ' ', ' ', 'A', 'A', 'A', 'A',' ', ' ','T', 'T', 'T', ' ', ' ', 'H', ' ', 'H', ' ', ' ', ' ', 'I'],
      ['P', ' ', ' ', 'P', ' ', ' ', 'R', ' ', ' ', 'R', ' ',' ', 'A', ' ', ' ', 'A', ' ',' ', 'N', 'N', ' ', 'N', ' ', ' ', 'A', ' ', ' ', 'A',' ', ' ',' ', 'T', ' ', ' ', ' ', 'H', ' ', 'H', ' ', ' ', ' ', 'I'],
      ['P', 'P', 'P', 'P', ' ', ' ', 'R', 'R', 'R', ' ', ' ',' ', 'A', 'A', 'A', 'A', ' ',' ', 'N', ' ', 'N', 'N', ' ', ' ', 'A', 'A', 'A', 'A',' ', ' ',' ', 'T', ' ', ' ', ' ', 'H', 'H', 'H', ' ', ' ', ' ', 'I'],
      ['P', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', 'R', ' ',' ', 'A', ' ', ' ', 'A', ' ',' ', 'N', ' ', ' ', 'N', ' ', ' ', 'A', ' ', ' ', 'A',' ', ' ',' ', 'T', ' ', ' ', ' ', 'H', ' ', 'H', ' ', ' ', ' ', 'I']
    ];
  
    let output = "";
  
    for (let row of namepattern) {
      let name = " ";
      for (let char of row) {
        name += char;
      }
      output += name + "\n";
    }
    document.getElementById("result").textContent = output;
    console.log(output);  
  }
printName()  

  