function largets(){
    let val1 = Number(document.getElementById('v1').value);
    let val2 = Number(document.getElementById('v2').value);
    let val3 = Number(document.getElementById('v3').value);
    let res;
    if(val1>val2 && val1>val3){
        res=val1;
    }else if(val2>val3 && val2>val1){
        res=val2;

    }
    else{
        res=val3;
    }
   

    document.getElementById('res').innerHTML = res;
}