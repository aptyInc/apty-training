function prt() {
    let num = document.getElementById("n").value;  
    let result = 1;  
    let steps = ""; 

    
    if (num === "" || num <= 0 || isNaN(num)) {
        document.getElementById("res").innerHTML = "Please enter a valid number greater than 0.";
        return;
    }

    let i = 1;
    while (i <= 10){
      
        steps += ` ${num}x ${i}=${num*i}<br>`;  
        i++;  
    }

   
    
    document.getElementById("res").innerHTML = steps;
}
