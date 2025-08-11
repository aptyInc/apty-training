function generatePyramid() {
    const rows = parseInt(document.getElementById("rows").value);
    let pyramid = "";
  
    for (let i = 1; i <= rows; i++) {
      let spaces = "";
      let stars = "";
  
      for (let j = 1; j <= rows - i; j++) {
        spaces += " ";
      } 
      for (let k = 1; k <= (2 * i - 1); k++) {
        stars += "*";
      }  
      pyramid += spaces + stars + "\n";
    }
    document.getElementById("result").textContent = pyramid;
  }
  