function intrest(){
    let p = Number(document.getElementById('v1').value);
    let t = Number(document.getElementById('v2').value);
    let r= Number(document.getElementById('v3').value);
    let res=(p*t*r)/100;

    document.getElementById('res').innerHTML =`simple intrest ${res}`;
}