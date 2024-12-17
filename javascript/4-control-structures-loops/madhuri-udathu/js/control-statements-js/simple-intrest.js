function calculateSI(){
    const p = Number(document.getElementById("principal").value);
    const r = Number(document.getElementById("rate").value);
    const t = Number(document.getElementById("time").value);
    let result=document.getElementById("result");
    result.innerText=(p*t*r)/100 ;
}