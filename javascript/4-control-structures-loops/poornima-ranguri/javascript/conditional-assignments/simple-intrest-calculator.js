const principalAmountElement = document.getElementById("principalAmount");
const intrestRateElement = document.getElementById("intrestRate");
const timeElement = document.getElementById("time");


function onCalculatingSimpleIntrest(){
    if(principalAmountElement.value === ""){
        document.getElementById("result").textContent = "Enter Principal Amount"
    }else if(intrestRateElement.value === ""){
        document.getElementById("result").textContent = "Enter Intrest Rate"
    }else if(timeElement.value === ""){
        document.getElementById("result").textContent = "Enter Time in Years"
    }else{
        let principalAmount = parseInt(principalAmountElement.value);
        let intrestRate = parseInt(intrestRateElement.value);
        let time = parseInt(timeElement.value);

        let simpleIntrest = (principalAmount * intrestRate * time) / 100;
        document.getElementById("result").textContent = `Simple Intrest is : ${simpleIntrest}`
    }
}