let all_numeric_values = document.querySelectorAll(".calc-numbers");
let display_id = document.getElementsByClassName("calc-display-wrapper");

//Adding Event Listener:
all_numeric_values.forEach((element) => {
    element.addEventListener("click" , input_numbers )
})

let currentInput = ""
let operator = null;
let firstValue = null;
let prePostIncre = null;
let result_arrived = false;


//Handling the input numbers;
function input_numbers(event){
    //Here the get the value from the event and add it to display
    const event_value = event.target.textContent;
    // display_id[0].innerHTML += event.target.textContent;

    if(result_arrived === true){
        if(event_value === "AC"){
            clearDisplay();
        }
        return;
    }

    switch(event_value){
        case "AC":
            clearDisplay();
            break;
        case "++":
        case "--":
            incrementDecrement(event_value);
            break;
        case "=":
            final_result();
            break;
        default :
            updateInput(event_value);
        
    }
}

function incrementDecrement(value){
    if(operator !== null){
        return;
    }
    //Post Increment: 6++
    if(currentInput !== "" && prePostIncre === null){
        switch(value){
            case "++":
                display_id[0].textContent = Number(currentInput)+1;
                break;
            case "--":
                display_id[0].textContent = Number(currentInput)-1;
                break;
            default:
                return;
        }
        result_arrived = true;
    }else if(prePostIncre === null && currentInput === ""){
        display_id[0].textContent = value;
        prePostIncre = value;
    }
}

function clearDisplay(){
    currentInput = "";
    operator = null;
    dispaly_inital_value = true;
    display_id[0].textContent = "";
    firstValue = null;
    prePostIncre = null;
    result_arrived = false;
}


function final_result(){
    const secondValue = Number(currentInput);

    if(prePostIncre !== null){
        // First We have to check whether the pre increment is there or not:
        switch(prePostIncre){
            case "++":
                display_id[0].textContent = Number(currentInput)+1;
                break;
            case "--":
                display_id[0].textContent = Number(currentInput)-1;
                break;
            default:
                return;
        }
        
        return;
    }
    else{
        //Second Step if pre increment is not there than we will use the operator:
        switch(operator){
            case "+":
                display_id[0].textContent = firstValue + secondValue;
                break;
            case "-":
                display_id[0].textContent = firstValue - secondValue;
                break;
            case "/":
                display_id[0].textContent = firstValue/secondValue;
                break;
            case "%":
                display_id[0].textContent = firstValue%secondValue;
                break;
            case "*":
                display_id[0].textContent = firstValue*secondValue;
                break;
            default: 
                return;
                break;
        }
    }
    result_arrived = true;
}

function updateInput(value){
    const assignment_operators = ['+', '-' , '/', '%' , '*'];
    // Edge Case if pre and post increment value is there:
    if(assignment_operators.includes(value) ){
        // Here we are checking inside the operator because if we use like this: if(assignment_operators.includes(value) && prePostIncre !== null)
        //So in that case it will go to else and print that value of operator to avoid this I have written inside it and in the top.
        if(prePostIncre !== null){
            return;
        }
        //If user input some operator without writing any number
        if(currentInput == "" || operator !==null){
            return;
        }else if(firstValue !== null && operator === null){
            // If user have written the operator and wants to update it:
            return;
        }
        else{
            firstValue = Number(currentInput);
            currentInput = "";
        }
        operator = value;
        display_id[0].textContent += value;
        
    }
    else{
        display_id[0].textContent += value;
        currentInput += value;
    }
}

