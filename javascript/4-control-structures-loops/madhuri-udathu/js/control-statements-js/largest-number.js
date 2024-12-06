function findLargest(){
    const val1=document.getElementById("num1").value;
    const val2=document.getElementById("num2").value;
    const val3=document.getElementById("num3").value;
    let result=document.getElementById("result");
    if(val1 > val2 && val1 > val3){
        result.textContent=val1;
    }
    else if(val2 > val3){
        result.textContent=val2;
    }
    else{
        result.textContent=val3;
    }
}