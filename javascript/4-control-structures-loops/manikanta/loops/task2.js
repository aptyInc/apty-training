function prt(){
        
    let number=Number(document.getElementById('n').value);
    let mai=document.getElementById('res');
    mai.innerHTML='';
    
    let i=0;
    let sum=0;
    while(i<=number){
       sum+=i;
       i++;
    }
    let ch=document.createElement('p');
    ch.innerHTML=sum;
    mai.appendChild(ch);
    
}