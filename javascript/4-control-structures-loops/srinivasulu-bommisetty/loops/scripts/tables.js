let result=document.getElementById("result")
function get_table(){
    let value=document.getElementById("value").value
    let p= document.createElement("p")
    for(i=1;i<=10;i++){
        
       p.innerHTML +=`${value} * ${i} = ${value*i} <br> `
    
      
    }
    result.appendChild(p)
}
