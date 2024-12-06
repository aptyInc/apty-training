const userInputElement = document.getElementById("userInput");

function onGetTable(){
    if(userInputElement.value === ""){
        document.getElementById("result").textContent = "Please Enter a Value"
    }else{
        let userInput = parseInt(userInputElement.value);
        let tableContent = "";
        for (let number = 1; number <= 10; number++) {
            let result = userInput * number;
            tableContent += `${userInput} x ${number} = ${result}<br>`;
        }

        document.getElementById("result").innerHTML = tableContent;
    }
}