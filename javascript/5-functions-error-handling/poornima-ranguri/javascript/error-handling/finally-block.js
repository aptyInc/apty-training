const defaultCity = "Paris";
const users = {
    "poori" : {"address": {"city": "Madanapalle"}},
    "ganesh" : {"address": {"city": "Banagalore"}},
    "gana" : {"address": {"city": "Switzerland"}},
    
}

function onHandlingRuntimeErrors(){
    const userInput = document.getElementById("userInput")
    const userName = userInput.value.trim()
    const resultElement = document.getElementById("result")
    try{
        const userCity = users[userName].address.city;
        resultElement.textContent = userCity;
        resultElement.style.color = "green"
    }catch(error){
        resultElement.textContent = `Error : User not found or invalid input`;
        resultElement.style.color = "red"
    }finally{
        const paragraphElement = document.createElement("p")
        paragraphElement.textContent += `\nDefault City : ${defaultCity}`
        paragraphElement.style.color = "darkgray"
        resultElement.appendChild(paragraphElement)
    }

}