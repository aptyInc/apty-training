let value1Element = document.getElementById("value1");
let value2Element = document.getElementById("value2");


function calculator(operator) {

    if (operator === "++") {
        let num = document.getElementById("num");
        let valueNumber = Number(num.value)
        valueNumber++; 
        num.value = valueNumber; 
        document.getElementById("result2").innerText = valueNumber; 


    } else if (operator === "--") {
        let num = document.getElementById("num");
        let valueNumber = Number(num.value)
        valueNumber--; 
        num.value = valueNumber; 
        document.getElementById("result2").innerText = valueNumber; 

    } else if (operator === 'clear') {
        document.getElementById("value1").value = ""; 
        document.getElementById("value2").value = "";  
        document.getElementById("num").value = "";    
        document.getElementById("result").innerText = "";  
        document.getElementById("result2").innerText = "";  

    }else{
        const value1 = parseFloat(value1Element.value);
        const value2 = parseFloat(value2Element.value);
    
    
    
        let result;
        switch (operator) {
            case "+":
                result = value1 + value2;
                break;
            case "-":
                result = value1 - value2;
                break;
            case "*":
                result = value1 * value2;
                break;
            case "/":
                result = value2 !== 0 ? value1 / value2 : "Division by zero";
                break;
            case "%":
                result = value1 % value2;
                break;    
            default:
                result = "Invalid Operation";
        }
    
        document.getElementById("result").innerText = result;

    }
}





