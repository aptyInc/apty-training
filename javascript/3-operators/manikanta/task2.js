function add(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1+=v2;
    document.getElementById('res').innerHTML=v1;
}
function sub(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1-=v2;
    document.getElementById('res').innerHTML=v1;
}
   
function div(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1/=v2;
    document.getElementById('res').innerHTML=v1;
}
function mul(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1*=v2;
    document.getElementById('res').innerHTML=v1;
}
function mod(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1%=v2;
    document.getElementById('res').innerHTML=v1;
}
function inc(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1++;
    v2++;
    document.getElementById('v1').value=v1;
    document.getElementById('v2').value=v2;
   
}
function dec(){
    let v1=Number(document.getElementById('v1').value);
    let v2=Number(document.getElementById('v2').value);
    v1--;
    v2--;
    document.getElementById('v1').value=v1;
    document.getElementById('v2').value=v2;
}