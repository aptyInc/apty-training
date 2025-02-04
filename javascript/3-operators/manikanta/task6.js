function dis(){
    let name=document.getElementById('fn').value+document.getElementById('sn').value;
     document.getElementById('r').innerHTML=Number(document.getElementById('a').value)>18 ? `Hello ${name} welcome to apty` :`Hello ${name} comeback after 18 years`
}