function repeatAction(){
    let ch=document.createElement('li');
    ch.innerHTML='im added by rapte acton functio';
          document.getElementById('re').appendChild(ch);
}
function hf(n,cb){
    for(let i=0;i<n;i++){
        cb();
    }

}
function doit(){
document.getElementById('re').innerHTML='';
hf(Number(document.getElementById('v1').value),repeatAction);
}