function check(){
    const number=parseInt(document.getElementById("num").value);

    if(isNaN(number)){
        document.getElementById("results").innerText="Please Enter a Number.";
        return;
    }
    if(number%2===0){
        document.getElementById("results").innerText=` ${number} is an even number.`;
    }else{
        document.getElementById("results").innerText=` ${number} is an odd number.`;
    }
}