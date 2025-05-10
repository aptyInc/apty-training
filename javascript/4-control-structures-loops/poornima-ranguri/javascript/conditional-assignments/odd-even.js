const userElement = document.getElementById("userNumber");

function onCheckingNumber(){

    if(userElement.value === ""){
        document.getElementById("result").textContent = "Required"
    }else{
        let userNumber = parseInt(userElement.value);
        if(userNumber % 2 === 0){
              document.getElementById("result").textContent = `${userNumber} is an Even Number`;
        }else{
            document.getElementById("result").textContent = `${userNumber} is an Odd Number`;
        }


    }

}