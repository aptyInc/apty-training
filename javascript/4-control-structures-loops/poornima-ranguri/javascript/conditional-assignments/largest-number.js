const firstElement = document.getElementById("firstNumber");
const secondElement = document.getElementById("secondNumber");
const thirdElement = document.getElementById("thirdNumber");

function onFindLargerNumber(){
    if(firstElement.value === "" || secondElement.value === "" || thirdElement.value === ""){
        document.getElementById("result").textContent = "Required"
       
    }else{
        let firstNumber = parseInt(firstElement.value);
        let secondNumber = parseInt(secondElement.value);
        let thirdNumber = parseInt(thirdElement.value);

        console.log(firstNumber)

        if(firstNumber > secondNumber && firstNumber > thirdNumber){
            document.getElementById("result").textContent = `${firstNumber} Number is Greater `
        }else if(secondNumber > thirdNumber && secondNumber > firstNumber){
            document.getElementById("result").textContent = `${secondNumber} Number is Greater `
        }else{
            document.getElementById("result").textContent = `${thirdNumber} Number is Greater `
        }
    }
}