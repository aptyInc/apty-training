function add(){
    document.getElementById('res').innerHTML=Number(document.getElementById('v1').value)+Number(document.getElementById('v2').value)
}
function sub(){
    document.getElementById('res').innerHTML=Number(document.getElementById('v1').value)-Number(document.getElementById('v2').value)
}
   
function div(){
    document.getElementById('res').innerHTML=Number(document.getElementById('v1').value)/Number(document.getElementById('v2').value)
}
function mul(){
    document.getElementById('res').innerHTML=Number(document.getElementById('v1').value)*Number(document.getElementById('v2').value)
}
function mod(){
    document.getElementById('res').innerHTML=Number(document.getElementById('v1').value)%Number(document.getElementById('v2').value)
}
function inc(){
    document.getElementById('v1').value=Number(document.getElementById('v1').value)+1;
    document.getElementById('v2').value=Number(document.getElementById('v2').value)+1;
}
function dec(){
    document.getElementById('v1').value=Number(document.getElementById('v1').value)-1;
    document.getElementById('v2').value=Number(document.getElementById('v2').value)-1;
}