function check(){
    let val1 = Number(document.getElementById('v1').value);
    
    let res;
    if(val1%2==0){
        res='Even';
    }else {
        res='Odd';

    }
   
   

    document.getElementById('res').innerHTML = res;
}