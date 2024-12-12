function escapeSequences() {

    var input = document.getElementById("inputString").value;
    
    var result = input.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
    
    document.getElementById("result").innerText = result;


}
