// used gpt to understand and write this code
function factorial() {

    let num1 = document.getElementById("number").value;


    num1 = parseInt(num1);

    let result = 1; 

    let counter = 1; 

    let steps = ""; 

    
    do {
        result = result * counter; 

        steps += `${counter === 1 ? "" : " x "}${counter}`; 

        counter = counter + 1; 

    } while (counter <= num1); 

    

    document.getElementById("result").innerText = `Steps: ${steps} = ${result}`;


}