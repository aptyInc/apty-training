function createPyramid() {
    const rows = parseInt(document.getElementById("rows").value); 
    let pyramid = "";
  
    for (let i = 1; i <= rows; i++) {
     
      let spaces = " ".repeat(rows - i);
  
    
      let stars = "*".repeat(2 * i - 1);
  
    
      pyramid += spaces + stars + "\n";
    }
  
    document.getElementById("pattern").textContent = pyramid; 
  }
  