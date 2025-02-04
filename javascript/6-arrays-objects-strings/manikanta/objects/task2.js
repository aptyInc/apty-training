let obj={"a":1,"b":2};
let copobj=JSON.parse(JSON.stringify(obj));
copobj.b=4;
document.getElementById('res').innerHTML=`orginal:${JSON.stringify(obj)} <br> copy:${JSON.stringify(copobj)}`;