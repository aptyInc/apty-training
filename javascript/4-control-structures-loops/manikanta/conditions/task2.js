function isl(n){

    if (n % 4 == 0) {
         if (n % 100 == 0) {
                 return n % 400 == 0;
                           }
return true;
}
return false;
}
function isLeaf(){
  
    let year = parseInt(document.getElementById('n').value);

    document.getElementById('r').innerHTML = isl(year)?'leaf year':'not a leaf year';
}