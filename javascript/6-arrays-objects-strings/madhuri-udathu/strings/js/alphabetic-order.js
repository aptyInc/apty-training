function getResult(){
    const input=document.getElementById("input").value;
    const str=input.split("").sort().join("");
    return str;
}
function result(){
    const output=document.getElementById("output");
    output.textContent=`Alphabetic Order is ${getResult()}`;
}