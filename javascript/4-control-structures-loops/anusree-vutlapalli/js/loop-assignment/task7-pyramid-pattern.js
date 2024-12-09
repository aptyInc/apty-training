function createPyramid() {
    const rows = parseInt(document.getElementById("rows").value); 
    let result = " "; 
    for (let i = 1; i <= rows; i++) {
    
        for (let s = 1; s <= rows - i; s++) {
            result += " ";
        }
        
        for (let j = 1; j <= 2 * i - 1; j++) {
            result += " * ";
        }
        
        result += "\n";
    }

    document.getElementById("result").textContent = result; 
}