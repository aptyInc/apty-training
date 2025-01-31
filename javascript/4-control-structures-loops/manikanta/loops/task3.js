function prt(){
        
    let number=Number(document.getElementById('n').value);
    let mai=document.getElementById('res');
    mai.innerHTML='';
    
    let prod=1;
    do{
        let ch=document.createElement('p');
        ch.innerHTML=`${number}*${prod}=${prod*number} `;
    prod*=number;
    
    mai.appendChild(ch);
    number--;
    }
    while(number>0);
    let ch=document.createElement('p');
    ch.innerHTML=`Final answer:${prod}`;
    mai.appendChild(ch);
    
}
