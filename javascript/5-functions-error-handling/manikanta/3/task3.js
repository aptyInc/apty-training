function getFib(){
    let val=Number(document.getElementById('v1').value);
    let cache={};
    function fib(i){
             if(i in cache){
                 
                 return cache[i];

             }
             if(i<=1){
               return i;
             }
             cache[i]=fib(i-1)+fib(i-2);
             return cache[i];
             
    }
   document.getElementById('re').innerHTML=fib(val);
}