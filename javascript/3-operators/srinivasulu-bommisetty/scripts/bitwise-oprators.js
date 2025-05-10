let result=document.getElementById("result")
function bit_and(){
   let value1 = parseFloat(document.getElementById("value1").value);
   let value2 = parseFloat(document.getElementById("value2").value);
   result.innerText=`${value1 & value2}`
   
}

function bit_or(){
   let value1 = parseFloat(document.getElementById("value1").value);
   let value2 = parseFloat(document.getElementById("value2").value);
   result.innerText=`${value1 | value2}`
   
}



function bit_Xor(){
   let value1 = parseFloat(document.getElementById("value1").value);
   let value2 = parseFloat(document.getElementById("value2").value);
   result.innerText=`${value1 ^ value2}`
   
}

function bit_not(){
   let value1 = parseFloat(document.getElementById("value1").value);
   let value2 = parseFloat(document.getElementById("value2").value);
   result.innerText=`${ ~ value1  } for value1`
   
}


function bit_Right_shift(){
   let value1 = parseFloat(document.getElementById("value1").value);
   let value2 = parseFloat(document.getElementById("value2").value);
   result.innerText=`${value1 >> value2}`
   
}
function bit_Left_shift(){
   let value1 = parseFloat(document.getElementById("value1").value);
   let value2 = parseFloat(document.getElementById("value2").value);
   result.innerText=`${value1 << value2}`
   
}