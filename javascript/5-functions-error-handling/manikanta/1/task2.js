function addsorted(){
    let inp=document.getElementById("n").value.split(",").map((i)=>{
             return Number(i);
    })
    let par=document.getElementById('res');
    par.innerHTML=''
    inp.sort();
    for(j of inp){
         let ch=document.createElement('tr')
         ch.innerHTML=j;
         par.appendChild(ch);
    }
    console.log(inp);
  //   /document.getElementById('res').innerHTML=res;
}