function calculate(){
    let principal=parseFloat(document.getElementById("principal").value);
    let rate=parseFloat(document.getElementById("rate").value);
    let time=parseFloat(document.getElementById("time").value);
    let results;
    if(isNaN(principal)||isNaN(rate)||isNaN(time)){
        document.getElementById("results").innerText="Please enter correct details.";
        return;
    }else{
        results=(principal*rate*time)/100;
        document.getElementById("results").innerText=`SI for ${principal} amount,${rate} roi and ${time} years time is ${results}`;
    }
}