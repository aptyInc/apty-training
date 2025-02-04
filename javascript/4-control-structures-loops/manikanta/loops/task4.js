function sum(arr){
    s=0;
    for(let i=0;i<arr.length;i++){
         s+=arr[i];
    }
    return [s,s/arr.length];
}
function avg(){
   let inp=document.getElementById('in').value.split(",").map((i)=>{
   return Number(i);
   });
   let re=sum(inp);
   document.getElementById('res').innerHTML=`Sum=${re[0]} Avg=${re[1]}`
}