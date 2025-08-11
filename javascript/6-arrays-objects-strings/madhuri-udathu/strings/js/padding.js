function padStart(){
    const input=document.getElementById("inputString").value;
    const output=document.getElementById("output");
    output.textContent=input.padStart(10,"0");
}
function padEnd(){
    const input=document.getElementById("inputString").value;
    const output=document.getElementById("output");
    output.textContent=input.padEnd(10,"0");
}