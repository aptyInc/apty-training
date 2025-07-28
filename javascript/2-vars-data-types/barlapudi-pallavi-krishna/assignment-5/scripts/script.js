const str = "10";
const num = 5;
const bool = true;
let undef;
const nul = null;
const obj = { a: 100 };

const results = document.getElementById("output");


function showResult(a, b) {
  var result;
  try {
    result = a + b;
  } catch (e) {
    result = "Error: " + e.message;
  }

  results.innerHTML += a + " + " + b + " = " + result + "<br>";
}


showResult(num, str);   
showResult(str, bool);  
showResult(str, undef); 
showResult(str, nul);   
showResult(str, obj);   

showResult(num, bool);    
showResult(num, undef);  
showResult(num, nul);    
showResult(num, obj); 

showResult(bool, nul);  
showResult(bool, undef);
showResult(bool, obj);    

showResult(undef, nul); 
showResult(undef, obj);  

showResult(nul, obj);  
