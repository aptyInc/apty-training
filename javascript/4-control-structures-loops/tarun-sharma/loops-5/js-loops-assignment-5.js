//used gpt to understand & write this code

function characterFrequency() {
    
    let a = document.getElementById("text").value;

    
    let count = {};

    
    for (let index in a) {
        let character = a[index]; 

        
        if (count[character]) {
            count[character] = count[character] + 1; 
        } else {
            count[character] = 1;
        }
    }

  
    let result = "character counts: \n";
    for (let character in count) {
        result += character + " = " + count[character] + "\n";
    }

  
    document.getElementById("result").innerText = result;

}
