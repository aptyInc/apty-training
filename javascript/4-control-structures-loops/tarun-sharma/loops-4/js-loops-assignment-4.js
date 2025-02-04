//used gpt to understand & write this code

function calculateSum() {
   
    let num1 = document.getElementById("number").value;

    
    let num2 = num1.split(","); 

    
    let sum = 0; 
    
    let count = 0; 

    
    for (let number of num2) {

        sum = sum + parseInt(number); 

        count = count + 1; 

    }

   
    let num3 = sum / count;

    
    document.getElementById("result").innerText = "sum = " + sum + ", average = " + num3;


}