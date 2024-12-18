function spliceArray() {

    var colors = ["blue", "orange", "grey", "pink"];
    
    colors.splice(1, 1, "blue");  

    colors.splice(4, 0, "grey");  
    colors.splice(2, 1);            
    
    document.getElementById("result").innerText = colors.join(", ");

    
}