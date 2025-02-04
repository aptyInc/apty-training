function fib(i){
    if( i<=1){
     return i;
    }
    return fib(i-1)+fib(i-2);
}
function fibm(){
   let num=Number(document.getElementById("n").value);
   let res=fib(num);
   document.getElementById('res').innerHTML=res;
}